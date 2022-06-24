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
    public class TIPOAREAController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/TIPOAREA
        public IQueryable<TIPOAREA> GetTIPOAREA()
        {
            return db.TIPOAREA;
        }

        // GET: api/TIPOAREA/5
        [ResponseType(typeof(TIPOAREA))]
        public async Task<IHttpActionResult> GetTIPOAREA(int id)
        {
            TIPOAREA tIPOAREA = await db.TIPOAREA.FindAsync(id);
            if (tIPOAREA == null)
            {
                return NotFound();
            }

            return Ok(tIPOAREA);
        }

        // PUT: api/TIPOAREA/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTIPOAREA(int id, TIPOAREA tIPOAREA)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tIPOAREA.id_tipoArea)
            {
                return BadRequest();
            }

            db.Entry(tIPOAREA).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TIPOAREAExists(id))
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

        // POST: api/TIPOAREA
        [ResponseType(typeof(TIPOAREA))]
        public async Task<IHttpActionResult> PostTIPOAREA(TIPOAREA tIPOAREA)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TIPOAREA.Add(tIPOAREA);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = tIPOAREA.id_tipoArea }, tIPOAREA);
        }

        // DELETE: api/TIPOAREA/5
        [ResponseType(typeof(TIPOAREA))]
        public async Task<IHttpActionResult> DeleteTIPOAREA(int id)
        {
            TIPOAREA tIPOAREA = await db.TIPOAREA.FindAsync(id);
            if (tIPOAREA == null)
            {
                return NotFound();
            }

            db.TIPOAREA.Remove(tIPOAREA);
            await db.SaveChangesAsync();

            return Ok(tIPOAREA);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TIPOAREAExists(int id)
        {
            return db.TIPOAREA.Count(e => e.id_tipoArea == id) > 0;
        }
    }
}