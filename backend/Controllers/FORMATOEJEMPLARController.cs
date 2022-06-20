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
    public class FORMATOEJEMPLARController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/FORMATOEJEMPLAR
        public IQueryable<FORMATOEJEMPLAR> GetFORMATOEJEMPLAR()
        {
            return db.FORMATOEJEMPLAR;
        }

        // GET: api/FORMATOEJEMPLAR/5
        [ResponseType(typeof(FORMATOEJEMPLAR))]
        public async Task<IHttpActionResult> GetFORMATOEJEMPLAR(int id)
        {
            FORMATOEJEMPLAR fORMATOEJEMPLAR = await db.FORMATOEJEMPLAR.FindAsync(id);
            if (fORMATOEJEMPLAR == null)
            {
                return NotFound();
            }

            return Ok(fORMATOEJEMPLAR);
        }

        // PUT: api/FORMATOEJEMPLAR/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutFORMATOEJEMPLAR(int id, FORMATOEJEMPLAR fORMATOEJEMPLAR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != fORMATOEJEMPLAR.id_formatoEjemplar)
            {
                return BadRequest();
            }

            db.Entry(fORMATOEJEMPLAR).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FORMATOEJEMPLARExists(id))
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

        // POST: api/FORMATOEJEMPLAR
        [ResponseType(typeof(FORMATOEJEMPLAR))]
        public async Task<IHttpActionResult> PostFORMATOEJEMPLAR(FORMATOEJEMPLAR fORMATOEJEMPLAR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.FORMATOEJEMPLAR.Add(fORMATOEJEMPLAR);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = fORMATOEJEMPLAR.id_formatoEjemplar }, fORMATOEJEMPLAR);
        }

        // DELETE: api/FORMATOEJEMPLAR/5
        [ResponseType(typeof(FORMATOEJEMPLAR))]
        public async Task<IHttpActionResult> DeleteFORMATOEJEMPLAR(int id)
        {
            FORMATOEJEMPLAR fORMATOEJEMPLAR = await db.FORMATOEJEMPLAR.FindAsync(id);
            if (fORMATOEJEMPLAR == null)
            {
                return NotFound();
            }

            db.FORMATOEJEMPLAR.Remove(fORMATOEJEMPLAR);
            await db.SaveChangesAsync();

            return Ok(fORMATOEJEMPLAR);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool FORMATOEJEMPLARExists(int id)
        {
            return db.FORMATOEJEMPLAR.Count(e => e.id_formatoEjemplar == id) > 0;
        }
    }
}