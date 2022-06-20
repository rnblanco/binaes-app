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
    public class AUTORxEJEMPLARController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/AUTORxEJEMPLAR
        public IQueryable<AUTORxEJEMPLAR> GetAUTORxEJEMPLAR()
        {
            return db.AUTORxEJEMPLAR;
        }

        // GET: api/AUTORxEJEMPLAR/5
        [ResponseType(typeof(AUTORxEJEMPLAR))]
        public async Task<IHttpActionResult> GetAUTORxEJEMPLAR(int id)
        {
            AUTORxEJEMPLAR aUTORxEJEMPLAR = await db.AUTORxEJEMPLAR.FindAsync(id);
            if (aUTORxEJEMPLAR == null)
            {
                return NotFound();
            }

            return Ok(aUTORxEJEMPLAR);
        }

        // PUT: api/AUTORxEJEMPLAR/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutAUTORxEJEMPLAR(int id, AUTORxEJEMPLAR aUTORxEJEMPLAR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != aUTORxEJEMPLAR.id_autorEjemplar)
            {
                return BadRequest();
            }

            db.Entry(aUTORxEJEMPLAR).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AUTORxEJEMPLARExists(id))
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

        // POST: api/AUTORxEJEMPLAR
        [ResponseType(typeof(AUTORxEJEMPLAR))]
        public async Task<IHttpActionResult> PostAUTORxEJEMPLAR(AUTORxEJEMPLAR aUTORxEJEMPLAR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AUTORxEJEMPLAR.Add(aUTORxEJEMPLAR);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = aUTORxEJEMPLAR.id_autorEjemplar }, aUTORxEJEMPLAR);
        }

        // DELETE: api/AUTORxEJEMPLAR/5
        [ResponseType(typeof(AUTORxEJEMPLAR))]
        public async Task<IHttpActionResult> DeleteAUTORxEJEMPLAR(int id)
        {
            AUTORxEJEMPLAR aUTORxEJEMPLAR = await db.AUTORxEJEMPLAR.FindAsync(id);
            if (aUTORxEJEMPLAR == null)
            {
                return NotFound();
            }

            db.AUTORxEJEMPLAR.Remove(aUTORxEJEMPLAR);
            await db.SaveChangesAsync();

            return Ok(aUTORxEJEMPLAR);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AUTORxEJEMPLARExists(int id)
        {
            return db.AUTORxEJEMPLAR.Count(e => e.id_autorEjemplar == id) > 0;
        }
    }
}