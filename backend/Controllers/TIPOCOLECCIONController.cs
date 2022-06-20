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
    public class TIPOCOLECCIONController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/TIPOCOLECCION
        public IQueryable<TIPOCOLECCION> GetTIPOCOLECCION()
        {
            return db.TIPOCOLECCION;
        }

        // GET: api/TIPOCOLECCION/5
        [ResponseType(typeof(TIPOCOLECCION))]
        public async Task<IHttpActionResult> GetTIPOCOLECCION(int id)
        {
            TIPOCOLECCION tIPOCOLECCION = await db.TIPOCOLECCION.FindAsync(id);
            if (tIPOCOLECCION == null)
            {
                return NotFound();
            }

            return Ok(tIPOCOLECCION);
        }

        // PUT: api/TIPOCOLECCION/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTIPOCOLECCION(int id, TIPOCOLECCION tIPOCOLECCION)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tIPOCOLECCION.id_tipoColeccion)
            {
                return BadRequest();
            }

            db.Entry(tIPOCOLECCION).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TIPOCOLECCIONExists(id))
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

        // POST: api/TIPOCOLECCION
        [ResponseType(typeof(TIPOCOLECCION))]
        public async Task<IHttpActionResult> PostTIPOCOLECCION(TIPOCOLECCION tIPOCOLECCION)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TIPOCOLECCION.Add(tIPOCOLECCION);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = tIPOCOLECCION.id_tipoColeccion }, tIPOCOLECCION);
        }

        // DELETE: api/TIPOCOLECCION/5
        [ResponseType(typeof(TIPOCOLECCION))]
        public async Task<IHttpActionResult> DeleteTIPOCOLECCION(int id)
        {
            TIPOCOLECCION tIPOCOLECCION = await db.TIPOCOLECCION.FindAsync(id);
            if (tIPOCOLECCION == null)
            {
                return NotFound();
            }

            db.TIPOCOLECCION.Remove(tIPOCOLECCION);
            await db.SaveChangesAsync();

            return Ok(tIPOCOLECCION);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TIPOCOLECCIONExists(int id)
        {
            return db.TIPOCOLECCION.Count(e => e.id_tipoColeccion == id) > 0;
        }
    }
}