using backend.Models;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Collections.Generic;

namespace backend.Controllers
{
    public class INICIAR_SESIONController : ApiController
    {
        string host = "http://localhost:4200";
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

            // Si las credenciales no son válidas
            if (uSUARIO == null)
            {
                return BadRequest("Credenciales inválidas.");
            }

            // Si las credenciales son válidas
            return Ok(new INICIAR_SESION_RESPUESTA(uSUARIO, CrearToken(peticion.email)));
        }

        private string CrearToken(string username) {
            const string seguridad = "401b09eab3c013d4ca54922bb802bec8fd5318192b0a75f201d8b3727429090fb337591abd3e44453b954555b7a0812e1081c39b740293f765eae731f5a65ed1";

            var llave = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(seguridad));
            var credenciales = new SigningCredentials(llave, SecurityAlgorithms.HmacSha256);

            //Create a List of Claims, Keep claims name short    
            var permClaims = new List<Claim>();
            permClaims.Add(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));
            permClaims.Add(new Claim("email", username));

            //Create Security Token object by giving required parameters    
            var token = new JwtSecurityToken(host, // Acreditador
                            host,  // Acreditado
                            permClaims,
                            expires: DateTime.Now.AddYears(1),
                            signingCredentials: credenciales);
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}