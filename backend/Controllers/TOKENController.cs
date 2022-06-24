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
    public class TOKENController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/TOKEN
        public IQueryable<TOKEN> GetTOKEN()
        {
            return db.TOKEN;
        }

        // GET: api/TOKEN/5
        [ResponseType(typeof(TOKEN))]
        public async Task<IHttpActionResult> GetTOKEN(int id)
        {
            TOKEN tOKEN = await db.TOKEN.FindAsync(id);
            if (tOKEN == null)
            {
                return NotFound();
            }

            return Ok(tOKEN);
        }

        // PUT: api/TOKEN/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTOKEN(int id, TOKEN tOKEN)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tOKEN.id_Token)
            {
                return BadRequest();
            }

            db.Entry(tOKEN).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TOKENExists(id))
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

        // POST: api/TOKEN
        [ResponseType(typeof(TOKEN))]
        public async Task<IHttpActionResult> PostTOKEN(TOKEN tOKEN)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TOKEN.Add(tOKEN);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = tOKEN.id_Token }, tOKEN);
        }

        // DELETE: api/TOKEN/5
        [ResponseType(typeof(TOKEN))]
        public async Task<IHttpActionResult> DeleteTOKEN(int id)
        {
            TOKEN tOKEN = await db.TOKEN.FindAsync(id);
            if (tOKEN == null)
            {
                return NotFound();
            }

            db.TOKEN.Remove(tOKEN);
            await db.SaveChangesAsync();

            return Ok(tOKEN);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TOKENExists(int id)
        {
            return db.TOKEN.Count(e => e.id_Token == id) > 0;
        }
    }
}