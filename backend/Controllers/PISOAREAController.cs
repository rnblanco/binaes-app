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
    public class PISOAREAController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/PISOAREA
        public IQueryable<PISOAREA> GetPISOAREA()
        {
            return db.PISOAREA;
        }

        // GET: api/PISOAREA/5
        [ResponseType(typeof(PISOAREA))]
        public async Task<IHttpActionResult> GetPISOAREA(int id)
        {
            PISOAREA pISOAREA = await db.PISOAREA.FindAsync(id);
            if (pISOAREA == null)
            {
                return NotFound();
            }

            return Ok(pISOAREA);
        }

        // PUT: api/PISOAREA/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPISOAREA(int id, PISOAREA pISOAREA)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pISOAREA.id_pisoArea)
            {
                return BadRequest();
            }

            db.Entry(pISOAREA).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PISOAREAExists(id))
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

        // POST: api/PISOAREA
        [ResponseType(typeof(PISOAREA))]
        public async Task<IHttpActionResult> PostPISOAREA(PISOAREA pISOAREA)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PISOAREA.Add(pISOAREA);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = pISOAREA.id_pisoArea }, pISOAREA);
        }

        // DELETE: api/PISOAREA/5
        [ResponseType(typeof(PISOAREA))]
        public async Task<IHttpActionResult> DeletePISOAREA(int id)
        {
            PISOAREA pISOAREA = await db.PISOAREA.FindAsync(id);
            if (pISOAREA == null)
            {
                return NotFound();
            }

            db.PISOAREA.Remove(pISOAREA);
            await db.SaveChangesAsync();

            return Ok(pISOAREA);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PISOAREAExists(int id)
        {
            return db.PISOAREA.Count(e => e.id_pisoArea == id) > 0;
        }
    }
}