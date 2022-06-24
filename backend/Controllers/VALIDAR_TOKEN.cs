using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace backend.Controllers
{
    internal class VALIDAR_TOKEN : DelegatingHandler
    {
        string host = "http://localhost:4200";
        const string key = "401b09eab3c013d4ca54922bb802bec8fd5318192b0a75f201d8b3727429090fb337591abd3e44453b954555b7a0812e1081c39b740293f765eae731f5a65ed1";
        private static bool ProbarToken(HttpRequestMessage request, out string token)
        {
            token = null;
            IEnumerable<string> authzHeaders;
            if (!request.Headers.TryGetValues("Authorization", out authzHeaders) || authzHeaders.Count() > 1)
            {
                return false;
            }
            var bearerToken = authzHeaders.ElementAt(0);
            token = bearerToken.StartsWith("Bearer ") ? bearerToken.Substring(7) : bearerToken;
            return true;
        }

        protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage peticion, CancellationToken cancelandoToken)
        {
            HttpStatusCode codigoEstado;
            string token;
            // Determinar si el token existe o no
            if (!ProbarToken(peticion, out token))
            {
                codigoEstado = HttpStatusCode.Unauthorized;
                //Permite solicitudes sin token
                return base.SendAsync(peticion, cancelandoToken);
            }

            try
            {
                var ahora = DateTime.UtcNow;
                var asegurandoLlave = new SymmetricSecurityKey(System.Text.Encoding.Default.GetBytes(key));


                SecurityToken asegurandoToken;
                JwtSecurityTokenHandler manejador = new JwtSecurityTokenHandler();
                TokenValidationParameters validaciones = new TokenValidationParameters()
                {
                    ValidAudience = host,
                    ValidIssuer = host,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    LifetimeValidator = this.ValidarVigencia,
                    IssuerSigningKey = asegurandoLlave
                };

                //Extracción y asignación de usuario al token
                Thread.CurrentPrincipal = manejador.ValidateToken(token, validaciones, out asegurandoToken);
                HttpContext.Current.User = manejador.ValidateToken(token, validaciones, out asegurandoToken);

                return base.SendAsync(peticion, cancelandoToken);
            }
            catch (SecurityTokenValidationException e)
            {
                codigoEstado = HttpStatusCode.Unauthorized;
            }
            catch (Exception ex)
            {
                codigoEstado = HttpStatusCode.InternalServerError;
            }

            return Task<HttpResponseMessage>.Factory.StartNew(() => new HttpResponseMessage(codigoEstado) { });
        }

        public bool ValidarVigencia(DateTime? noAntesDe, DateTime? expiracion, SecurityToken asegurandoToken, TokenValidationParameters parametros)
        {
            if (expiracion != null)
            {
                if (DateTime.UtcNow < expiracion) return true;
            }
            return false;
        }

    }
}