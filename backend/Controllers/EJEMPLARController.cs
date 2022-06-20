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
    public class EJEMPLARController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/EJEMPLAR
        public IQueryable<EJEMPLAR> GetEJEMPLAR()
        {
            return db.EJEMPLAR;
        }

        // GET: api/EJEMPLAR/5
        [ResponseType(typeof(EJEMPLAR))]
        public async Task<IHttpActionResult> GetEJEMPLAR(int id)
        {
            EJEMPLAR eJEMPLAR = await db.EJEMPLAR.FindAsync(id);
            if (eJEMPLAR == null)
            {
                return NotFound();
            }

            return Ok(eJEMPLAR);
        }

        // PUT: api/EJEMPLAR/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutEJEMPLAR(int id, EJEMPLAR eJEMPLAR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != eJEMPLAR.id_Ejemplar)
            {
                return BadRequest();
            }

            db.Entry(eJEMPLAR).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EJEMPLARExists(id))
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

        // POST: api/EJEMPLAR
        [ResponseType(typeof(EJEMPLAR))]
        public async Task<IHttpActionResult> PostEJEMPLAR(EJEMPLAR eJEMPLAR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EJEMPLAR.Add(eJEMPLAR);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = eJEMPLAR.id_Ejemplar }, eJEMPLAR);
        }

        // DELETE: api/EJEMPLAR/5
        [ResponseType(typeof(EJEMPLAR))]
        public async Task<IHttpActionResult> DeleteEJEMPLAR(int id)
        {
            EJEMPLAR eJEMPLAR = await db.EJEMPLAR.FindAsync(id);
            if (eJEMPLAR == null)
            {
                return NotFound();
            }

            db.EJEMPLAR.Remove(eJEMPLAR);
            await db.SaveChangesAsync();

            return Ok(eJEMPLAR);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EJEMPLARExists(int id)
        {
            return db.EJEMPLAR.Count(e => e.id_Ejemplar == id) > 0;
        }
    }
}