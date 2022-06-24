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
    public class ROLUSUARIOController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/ROLUSUARIO
        public IQueryable<ROLUSUARIO> GetROLUSUARIO()
        {
            return db.ROLUSUARIO;
        }

        // GET: api/ROLUSUARIO/5
        [ResponseType(typeof(ROLUSUARIO))]
        public async Task<IHttpActionResult> GetROLUSUARIO(int id)
        {
            ROLUSUARIO rOLUSUARIO = await db.ROLUSUARIO.FindAsync(id);
            if (rOLUSUARIO == null)
            {
                return NotFound();
            }

            return Ok(rOLUSUARIO);
        }

        // PUT: api/ROLUSUARIO/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutROLUSUARIO(int id, ROLUSUARIO rOLUSUARIO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != rOLUSUARIO.id_rolUsuario)
            {
                return BadRequest();
            }

            db.Entry(rOLUSUARIO).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ROLUSUARIOExists(id))
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

        // POST: api/ROLUSUARIO
        [ResponseType(typeof(ROLUSUARIO))]
        public async Task<IHttpActionResult> PostROLUSUARIO(ROLUSUARIO rOLUSUARIO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ROLUSUARIO.Add(rOLUSUARIO);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = rOLUSUARIO.id_rolUsuario }, rOLUSUARIO);
        }

        // DELETE: api/ROLUSUARIO/5
        [ResponseType(typeof(ROLUSUARIO))]
        public async Task<IHttpActionResult> DeleteROLUSUARIO(int id)
        {
            ROLUSUARIO rOLUSUARIO = await db.ROLUSUARIO.FindAsync(id);
            if (rOLUSUARIO == null)
            {
                return NotFound();
            }

            db.ROLUSUARIO.Remove(rOLUSUARIO);
            await db.SaveChangesAsync();

            return Ok(rOLUSUARIO);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ROLUSUARIOExists(int id)
        {
            return db.ROLUSUARIO.Count(e => e.id_rolUsuario == id) > 0;
        }
    }
}