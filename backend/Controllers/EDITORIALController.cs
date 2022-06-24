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
    public class EDITORIALController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/EDITORIAL
        public IQueryable<EDITORIAL> GetEDITORIAL()
        {
            return db.EDITORIAL;
        }

        // GET: api/EDITORIAL/5
        [ResponseType(typeof(EDITORIAL))]
        public async Task<IHttpActionResult> GetEDITORIAL(int id)
        {
            EDITORIAL eDITORIAL = await db.EDITORIAL.FindAsync(id);
            if (eDITORIAL == null)
            {
                return NotFound();
            }

            return Ok(eDITORIAL);
        }

        // PUT: api/EDITORIAL/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutEDITORIAL(int id, EDITORIAL eDITORIAL)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != eDITORIAL.id_Editorial)
            {
                return BadRequest();
            }

            db.Entry(eDITORIAL).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EDITORIALExists(id))
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

        // POST: api/EDITORIAL
        [ResponseType(typeof(EDITORIAL))]
        public async Task<IHttpActionResult> PostEDITORIAL(EDITORIAL eDITORIAL)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EDITORIAL.Add(eDITORIAL);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = eDITORIAL.id_Editorial }, eDITORIAL);
        }

        // DELETE: api/EDITORIAL/5
        [ResponseType(typeof(EDITORIAL))]
        public async Task<IHttpActionResult> DeleteEDITORIAL(int id)
        {
            EDITORIAL eDITORIAL = await db.EDITORIAL.FindAsync(id);
            if (eDITORIAL == null)
            {
                return NotFound();
            }

            db.EDITORIAL.Remove(eDITORIAL);
            await db.SaveChangesAsync();

            return Ok(eDITORIAL);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EDITORIALExists(int id)
        {
            return db.EDITORIAL.Count(e => e.id_Editorial == id) > 0;
        }
    }
}