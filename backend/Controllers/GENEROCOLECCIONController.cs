using backend.Models;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace backend.Controllers
{
    [Authorize]
    public class GENEROCOLECCIONController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/GENEROCOLECCION
        public IQueryable<GENEROCOLECCION> GetGENEROCOLECCION()
        {
            return db.GENEROCOLECCION;
        }

        // GET: api/GENEROCOLECCION/5
        [ResponseType(typeof(GENEROCOLECCION))]
        public async Task<IHttpActionResult> GetGENEROCOLECCION(int id)
        {
            GENEROCOLECCION gENEROCOLECCION = await db.GENEROCOLECCION.FindAsync(id);
            if (gENEROCOLECCION == null)
            {
                return NotFound();
            }

            return Ok(gENEROCOLECCION);
        }

        // PUT: api/GENEROCOLECCION/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutGENEROCOLECCION(int id, GENEROCOLECCION gENEROCOLECCION)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != gENEROCOLECCION.id_generoColeccion)
            {
                return BadRequest();
            }

            db.Entry(gENEROCOLECCION).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GENEROCOLECCIONExists(id))
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

        // POST: api/GENEROCOLECCION
        [ResponseType(typeof(GENEROCOLECCION))]
        public async Task<IHttpActionResult> PostGENEROCOLECCION(GENEROCOLECCION gENEROCOLECCION)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.GENEROCOLECCION.Add(gENEROCOLECCION);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = gENEROCOLECCION.id_generoColeccion }, gENEROCOLECCION);
        }

        // DELETE: api/GENEROCOLECCION/5
        [ResponseType(typeof(GENEROCOLECCION))]
        public async Task<IHttpActionResult> DeleteGENEROCOLECCION(int id)
        {
            GENEROCOLECCION gENEROCOLECCION = await db.GENEROCOLECCION.FindAsync(id);
            if (gENEROCOLECCION == null)
            {
                return NotFound();
            }

            db.GENEROCOLECCION.Remove(gENEROCOLECCION);
            await db.SaveChangesAsync();

            return Ok(gENEROCOLECCION);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool GENEROCOLECCIONExists(int id)
        {
            return db.GENEROCOLECCION.Count(e => e.id_generoColeccion == id) > 0;
        }
    }
}