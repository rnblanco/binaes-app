using backend.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;

namespace backend.Controllers
{
    public class INICIAR_SESIONController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        [ResponseType(typeof(USUARIO))]
        public async Task<IHttpActionResult> Autenticar(INICIAR_SESION peticion)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            USUARIO uSUARIO = new USUARIO();
            byte[] contrasena = Encoding.UTF8.GetBytes(peticion.contrasena);
            uSUARIO = db.USUARIO.Where(u => u.email == peticion.email).Where(u => u.contrasena == contrasena).FirstOrDefault();
            

            // Si las credenciales son válidas
            if (uSUARIO == null)
            {
                return StatusCode(HttpStatusCode.Unauthorized);
            }

            return Ok(new INICIAR_SESION_RESPUESTA(uSUARIO, CrearToken(peticion.email)));
        }

        private string CrearToken(string username)
        {
            // Agregar la fecha de creación
            DateTime creacion = DateTime.UtcNow;
            // Agregar la fecha de expiración
            DateTime expiracion = DateTime.UtcNow.AddMinutes(10);

            var tokenHandler = new JwtSecurityTokenHandler();

            // Crear una identidad y agregar los claims al usuario que queremos iniciar sesión
            ClaimsIdentity claimsIdentity = new ClaimsIdentity(new[]
            {
                new Claim(ClaimTypes.Name, username)
            });

            const string sec = "401b09eab3c013d4ca54922bb802bec8fd5318192b0a75f201d8b3727429090fb337591abd3e44453b954555b7a0812e1081c39b740293f765eae731f5a65ed1";
            var hoy = DateTime.UtcNow;
            var llave = new Microsoft.IdentityModel.Tokens.SymmetricSecurityKey(System.Text.Encoding.Default.GetBytes(sec));
            var credenciales = new Microsoft.IdentityModel.Tokens.SigningCredentials(llave, Microsoft.IdentityModel.Tokens.SecurityAlgorithms.HmacSha256Signature);


            // Crear el jwt
            var token =
                (JwtSecurityToken)
                    tokenHandler.CreateJwtSecurityToken(issuer: "http://localhost:4200", audience: "http://localhost:4200",
                        subject: claimsIdentity, notBefore: creacion, expires: expiracion, signingCredentials: credenciales);
            var tokenString = tokenHandler.WriteToken(token);

            return tokenString;
        }

    }
}