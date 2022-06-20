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
    public class PRESTAMOController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/PRESTAMO
        public IQueryable<PRESTAMO> GetPRESTAMO()
        {
            return db.PRESTAMO;
        }

        // GET: api/PRESTAMO/5
        [ResponseType(typeof(PRESTAMO))]
        public async Task<IHttpActionResult> GetPRESTAMO(int id)
        {
            PRESTAMO pRESTAMO = await db.PRESTAMO.FindAsync(id);
            if (pRESTAMO == null)
            {
                return NotFound();
            }

            return Ok(pRESTAMO);
        }

        // PUT: api/PRESTAMO/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPRESTAMO(int id, PRESTAMO pRESTAMO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pRESTAMO.id_Prestamo)
            {
                return BadRequest();
            }

            db.Entry(pRESTAMO).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PRESTAMOExists(id))
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

        // POST: api/PRESTAMO
        [ResponseType(typeof(PRESTAMO))]
        public async Task<IHttpActionResult> PostPRESTAMO(PRESTAMO pRESTAMO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PRESTAMO.Add(pRESTAMO);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = pRESTAMO.id_Prestamo }, pRESTAMO);
        }

        // DELETE: api/PRESTAMO/5
        [ResponseType(typeof(PRESTAMO))]
        public async Task<IHttpActionResult> DeletePRESTAMO(int id)
        {
            PRESTAMO pRESTAMO = await db.PRESTAMO.FindAsync(id);
            if (pRESTAMO == null)
            {
                return NotFound();
            }

            db.PRESTAMO.Remove(pRESTAMO);
            await db.SaveChangesAsync();

            return Ok(pRESTAMO);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PRESTAMOExists(int id)
        {
            return db.PRESTAMO.Count(e => e.id_Prestamo == id) > 0;
        }
    }
}