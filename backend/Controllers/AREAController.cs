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
    public class AREAController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/AREA
        public IQueryable<AREA> GetAREA()
        {
            return db.AREA;
        }

        // GET: api/AREA/5
        [ResponseType(typeof(AREA))]
        public async Task<IHttpActionResult> GetAREA(int id)
        {
            AREA aREA = await db.AREA.FindAsync(id);
            if (aREA == null)
            {
                return NotFound();
            }

            return Ok(aREA);
        }

        // PUT: api/AREA/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutAREA(int id, AREA aREA)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != aREA.id_Area)
            {
                return BadRequest();
            }

            db.Entry(aREA).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AREAExists(id))
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

        // POST: api/AREA
        [ResponseType(typeof(AREA))]
        public async Task<IHttpActionResult> PostAREA(AREA aREA)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AREA.Add(aREA);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = aREA.id_Area }, aREA);
        }

        // DELETE: api/AREA/5
        [ResponseType(typeof(AREA))]
        public async Task<IHttpActionResult> DeleteAREA(int id)
        {
            AREA aREA = await db.AREA.FindAsync(id);
            if (aREA == null)
            {
                return NotFound();
            }

            db.AREA.Remove(aREA);
            await db.SaveChangesAsync();

            return Ok(aREA);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AREAExists(int id)
        {
            return db.AREA.Count(e => e.id_Area == id) > 0;
        }
    }
}