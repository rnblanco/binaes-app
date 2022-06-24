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
    public class ESTADOSController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/ESTADOS
        public IQueryable<ESTADOS> GetESTADOS()
        {
            return db.ESTADOS;
        }

        // GET: api/ESTADOS/5
        [ResponseType(typeof(ESTADOS))]
        public async Task<IHttpActionResult> GetESTADOS(int id)
        {
            ESTADOS eSTADOS = await db.ESTADOS.FindAsync(id);
            if (eSTADOS == null)
            {
                return NotFound();
            }

            return Ok(eSTADOS);
        }

        // PUT: api/ESTADOS/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutESTADOS(int id, ESTADOS eSTADOS)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != eSTADOS.id_Estado)
            {
                return BadRequest();
            }

            db.Entry(eSTADOS).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ESTADOSExists(id))
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

        // POST: api/ESTADOS
        [ResponseType(typeof(ESTADOS))]
        public async Task<IHttpActionResult> PostESTADOS(ESTADOS eSTADOS)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ESTADOS.Add(eSTADOS);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = eSTADOS.id_Estado }, eSTADOS);
        }

        // DELETE: api/ESTADOS/5
        [ResponseType(typeof(ESTADOS))]
        public async Task<IHttpActionResult> DeleteESTADOS(int id)
        {
            ESTADOS eSTADOS = await db.ESTADOS.FindAsync(id);
            if (eSTADOS == null)
            {
                return NotFound();
            }

            db.ESTADOS.Remove(eSTADOS);
            await db.SaveChangesAsync();

            return Ok(eSTADOS);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ESTADOSExists(int id)
        {
            return db.ESTADOS.Count(e => e.id_Estado == id) > 0;
        }
    }
}