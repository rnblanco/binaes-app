using backend.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace backend.Controllers
{
    public class ACTUALIZARCONTRASENAController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // PUT: api/ACTUALIZARCONTRASENA?idUsuario=00000001&token=djkasndkjsandkjsadnq98
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutCONTRASENA(string idUsuario, string token, ACTUALIZARCONTRASENA aCTUALIZARCONTRASENA)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (idUsuario != aCTUALIZARCONTRASENA.id_Usuario)
            {
                return BadRequest();
            }

            TOKEN tokendb = db.TOKEN.Where(x => x.id_Usuario == idUsuario).FirstOrDefault();
            TOKENController tOKENController = new TOKENController();

            if (tokendb == null)
            {
                return NotFound();
            }

            string dbtoken = Encoding.UTF8.GetString(tokendb.TOKEN1);
            if (token != dbtoken)
            {
                return BadRequest();
            }
            if (tokendb.fh_Expiracion <= DateTime.Now)
            {
                return BadRequest();
            }
            
            USUARIO uSUARIO = new USUARIO();
            byte[] contrasenaA = Encoding.UTF8.GetBytes(aCTUALIZARCONTRASENA.contrasena);            
            uSUARIO = db.USUARIO.Where(x => x.id_Usuario == idUsuario).FirstOrDefault();

            if (uSUARIO == null)
            {
                return BadRequest();
            }

            byte[] contrasena = Encoding.UTF8.GetBytes(aCTUALIZARCONTRASENA.contrasena);

            uSUARIO.contrasena = contrasena;

            db.Entry(uSUARIO).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
                TOKEN tOKEN = new TOKEN();
                tOKEN.TOKEN1 = tokendb.TOKEN1;
                tOKEN.id_Usuario = tokendb.id_Usuario;
                tOKEN.fh_Expiracion = DateTime.Now;
                tOKEN.id_Token = tokendb.id_Token;

                await tOKENController.PutTOKEN(tokendb.id_Token, tOKEN);
                return Ok(new { token = token, usuario = uSUARIO });
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USUARIOExists(idUsuario))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }
        private bool USUARIOExists(string id)
        {
            return db.USUARIO.Count(e => e.id_Usuario == id) > 0;
        }
    }
}
