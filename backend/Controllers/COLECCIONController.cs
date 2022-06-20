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
    public class COLECCIONController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/COLECCION
        public IQueryable<COLECCION> GetCOLECCION()
        {
            return db.COLECCION;
        }

        // GET: api/COLECCION/5
        [ResponseType(typeof(COLECCION))]
        public async Task<IHttpActionResult> GetCOLECCION(int id)
        {
            COLECCION cOLECCION = await db.COLECCION.FindAsync(id);
            if (cOLECCION == null)
            {
                return NotFound();
            }

            return Ok(cOLECCION);
        }

        // PUT: api/COLECCION/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutCOLECCION(int id, COLECCION cOLECCION)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cOLECCION.id_Coleccion)
            {
                return BadRequest();
            }

            db.Entry(cOLECCION).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!COLECCIONExists(id))
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

        // POST: api/COLECCION
        [ResponseType(typeof(COLECCION))]
        public async Task<IHttpActionResult> PostCOLECCION(COLECCION cOLECCION)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.COLECCION.Add(cOLECCION);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = cOLECCION.id_Coleccion }, cOLECCION);
        }

        // DELETE: api/COLECCION/5
        [ResponseType(typeof(COLECCION))]
        public async Task<IHttpActionResult> DeleteCOLECCION(int id)
        {
            COLECCION cOLECCION = await db.COLECCION.FindAsync(id);
            if (cOLECCION == null)
            {
                return NotFound();
            }

            db.COLECCION.Remove(cOLECCION);
            await db.SaveChangesAsync();

            return Ok(cOLECCION);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool COLECCIONExists(int id)
        {
            return db.COLECCION.Count(e => e.id_Coleccion == id) > 0;
        }
    }
}