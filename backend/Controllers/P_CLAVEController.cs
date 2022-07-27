using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using backend.Models;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [Authorize]
    public class P_CLAVEController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/P_CLAVE
        public IQueryable<P_CLAVE> GetP_CLAVE()
        {
            return db.P_CLAVE;
        }

        // GET: api/P_CLAVE/5
        [ResponseType(typeof(P_CLAVE))]
        public async Task<IHttpActionResult> GetP_CLAVE(int id)
        {
            P_CLAVE p_CLAVE = db.P_CLAVE.Find(id);
            if (p_CLAVE == null)
            {
                return NotFound();
            }

            return Ok(p_CLAVE);
        }

        // PUT: api/P_CLAVE/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutP_CLAVE(int id, P_CLAVE p_CLAVE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != p_CLAVE.id_p_clave)
            {
                return BadRequest();
            }

            db.Entry(p_CLAVE).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!P_CLAVEExists(id))
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

        // POST: api/P_CLAVE
        [ResponseType(typeof(P_CLAVE))]
        public IHttpActionResult PostP_CLAVE(P_CLAVE p_CLAVE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.P_CLAVE.Add(p_CLAVE);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = p_CLAVE.id_p_clave }, p_CLAVE);
        }

        // DELETE: api/P_CLAVE/5
        [ResponseType(typeof(P_CLAVE))]
        public IHttpActionResult DeleteP_CLAVE(int id)
        {
            P_CLAVE p_CLAVE = db.P_CLAVE.Find(id);
            if (p_CLAVE == null)
            {
                return NotFound();
            }

            db.P_CLAVE.Remove(p_CLAVE);
            db.SaveChanges();

            return Ok(p_CLAVE);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool P_CLAVEExists(int id)
        {
            return db.P_CLAVE.Count(e => e.id_p_clave == id) > 0;
        }
    }
}