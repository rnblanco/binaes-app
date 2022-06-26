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

        // PUT: api/ACTUALIZARCONTRASENA/00000001
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutCONTRASENA(string id, ACTUALIZARCONTRASENA aCTUALIZARCONTRASENA)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != aCTUALIZARCONTRASENA.id_Usuario)
            {
                return BadRequest();
            }

            USUARIO uSUARIO = new USUARIO();
            byte[] contrasenaA = Encoding.UTF8.GetBytes(aCTUALIZARCONTRASENA.contrasenaA);            
            uSUARIO = db.USUARIO.Where(x => x.id_Usuario == id).Where(x => x.contrasena == contrasenaA).FirstOrDefault();

            if (uSUARIO == null)
            {
                return BadRequest();
            }

            byte[] contrasenaN = Encoding.UTF8.GetBytes(aCTUALIZARCONTRASENA.contrasenaN);

            uSUARIO.contrasena = contrasenaN;

            db.Entry(uSUARIO).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USUARIOExists(id))
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
