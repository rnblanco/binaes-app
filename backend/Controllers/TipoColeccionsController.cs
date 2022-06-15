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
    public class TipoColeccionsController : ApiController
    {
        private BinaesTestModel db = new BinaesTestModel();

        // GET: api/TipoColeccions
        public IQueryable<TipoColeccion> GetTipoColeccions()
        {
            return db.TipoColeccions;
        }

        // GET: api/TipoColeccions/5
        [ResponseType(typeof(TipoColeccion))]
        public async Task<IHttpActionResult> GetTipoColeccion(int id)
        {
            TipoColeccion tipoColeccion = await db.TipoColeccions.FindAsync(id);
            if (tipoColeccion == null)
            {
                return NotFound();
            }

            return Ok(tipoColeccion);
        }

        // PUT: api/TipoColeccions/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTipoColeccion(int id, TipoColeccion tipoColeccion)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tipoColeccion.id_tipo_coleccion)
            {
                return BadRequest();
            }

            db.Entry(tipoColeccion).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoColeccionExists(id))
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

        // POST: api/TipoColeccions
        [ResponseType(typeof(TipoColeccion))]
        public async Task<IHttpActionResult> PostTipoColeccion(TipoColeccion tipoColeccion)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TipoColeccions.Add(tipoColeccion);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = tipoColeccion.id_tipo_coleccion }, tipoColeccion);
        }

        // DELETE: api/TipoColeccions/5
        [ResponseType(typeof(TipoColeccion))]
        public async Task<IHttpActionResult> DeleteTipoColeccion(int id)
        {
            TipoColeccion tipoColeccion = await db.TipoColeccions.FindAsync(id);
            if (tipoColeccion == null)
            {
                return NotFound();
            }

            db.TipoColeccions.Remove(tipoColeccion);
            await db.SaveChangesAsync();

            return Ok(tipoColeccion);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TipoColeccionExists(int id)
        {
            return db.TipoColeccions.Count(e => e.id_tipo_coleccion == id) > 0;
        }
    }
}