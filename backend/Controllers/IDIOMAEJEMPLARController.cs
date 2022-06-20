using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using backend.Models;

namespace backend.Controllers
{
    public class IDIOMAEJEMPLARController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/IDIOMAEJEMPLARs
        public IQueryable<IDIOMAEJEMPLAR> GetIDIOMAEJEMPLAR()
        {
            return db.IDIOMAEJEMPLAR;
        }

        // GET: api/IDIOMAEJEMPLARs/5
        [ResponseType(typeof(IDIOMAEJEMPLAR))]
        public async Task<IHttpActionResult> GetIDIOMAEJEMPLAR(int id)
        {
            IDIOMAEJEMPLAR iDIOMAEJEMPLAR = await db.IDIOMAEJEMPLAR.FindAsync(id);
            if (iDIOMAEJEMPLAR == null)
            {
                return NotFound();
            }

            return Ok(iDIOMAEJEMPLAR);
        }

        // PUT: api/IDIOMAEJEMPLARs/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutIDIOMAEJEMPLAR(int id, IDIOMAEJEMPLAR iDIOMAEJEMPLAR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != iDIOMAEJEMPLAR.id_idiomaEjemplar)
            {
                return BadRequest();
            }

            db.Entry(iDIOMAEJEMPLAR).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IDIOMAEJEMPLARExists(id))
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

        // POST: api/IDIOMAEJEMPLARs
        [ResponseType(typeof(IDIOMAEJEMPLAR))]
        public async Task<IHttpActionResult> PostIDIOMAEJEMPLAR(IDIOMAEJEMPLAR iDIOMAEJEMPLAR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.IDIOMAEJEMPLAR.Add(iDIOMAEJEMPLAR);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = iDIOMAEJEMPLAR.id_idiomaEjemplar }, iDIOMAEJEMPLAR);
        }

        // DELETE: api/IDIOMAEJEMPLARs/5
        [ResponseType(typeof(IDIOMAEJEMPLAR))]
        public async Task<IHttpActionResult> DeleteIDIOMAEJEMPLAR(int id)
        {
            IDIOMAEJEMPLAR iDIOMAEJEMPLAR = await db.IDIOMAEJEMPLAR.FindAsync(id);
            if (iDIOMAEJEMPLAR == null)
            {
                return NotFound();
            }

            db.IDIOMAEJEMPLAR.Remove(iDIOMAEJEMPLAR);
            await db.SaveChangesAsync();

            return Ok(iDIOMAEJEMPLAR);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool IDIOMAEJEMPLARExists(int id)
        {
            return db.IDIOMAEJEMPLAR.Count(e => e.id_idiomaEjemplar == id) > 0;
        }
    }
}