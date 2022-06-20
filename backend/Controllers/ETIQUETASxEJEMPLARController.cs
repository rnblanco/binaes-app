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
    public class ETIQUETASxEJEMPLARController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/ETIQUETASxEJEMPLAR
        public IQueryable<ETIQUETASxEJEMPLAR> GetETIQUETASxEJEMPLAR()
        {
            return db.ETIQUETASxEJEMPLAR;
        }

        // GET: api/ETIQUETASxEJEMPLAR/5
        [ResponseType(typeof(ETIQUETASxEJEMPLAR))]
        public async Task<IHttpActionResult> GetETIQUETASxEJEMPLAR(int id)
        {
            ETIQUETASxEJEMPLAR eTIQUETASxEJEMPLAR = await db.ETIQUETASxEJEMPLAR.FindAsync(id);
            if (eTIQUETASxEJEMPLAR == null)
            {
                return NotFound();
            }

            return Ok(eTIQUETASxEJEMPLAR);
        }

        // PUT: api/ETIQUETASxEJEMPLAR/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutETIQUETASxEJEMPLAR(int id, ETIQUETASxEJEMPLAR eTIQUETASxEJEMPLAR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != eTIQUETASxEJEMPLAR.id_etiquetaEjemplar)
            {
                return BadRequest();
            }

            db.Entry(eTIQUETASxEJEMPLAR).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ETIQUETASxEJEMPLARExists(id))
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

        // POST: api/ETIQUETASxEJEMPLAR
        [ResponseType(typeof(ETIQUETASxEJEMPLAR))]
        public async Task<IHttpActionResult> PostETIQUETASxEJEMPLAR(ETIQUETASxEJEMPLAR eTIQUETASxEJEMPLAR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ETIQUETASxEJEMPLAR.Add(eTIQUETASxEJEMPLAR);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ETIQUETASxEJEMPLARExists(eTIQUETASxEJEMPLAR.id_etiquetaEjemplar))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = eTIQUETASxEJEMPLAR.id_etiquetaEjemplar }, eTIQUETASxEJEMPLAR);
        }

        // DELETE: api/ETIQUETASxEJEMPLAR/5
        [ResponseType(typeof(ETIQUETASxEJEMPLAR))]
        public async Task<IHttpActionResult> DeleteETIQUETASxEJEMPLAR(int id)
        {
            ETIQUETASxEJEMPLAR eTIQUETASxEJEMPLAR = await db.ETIQUETASxEJEMPLAR.FindAsync(id);
            if (eTIQUETASxEJEMPLAR == null)
            {
                return NotFound();
            }

            db.ETIQUETASxEJEMPLAR.Remove(eTIQUETASxEJEMPLAR);
            await db.SaveChangesAsync();

            return Ok(eTIQUETASxEJEMPLAR);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ETIQUETASxEJEMPLARExists(int id)
        {
            return db.ETIQUETASxEJEMPLAR.Count(e => e.id_etiquetaEjemplar == id) > 0;
        }
    }
}