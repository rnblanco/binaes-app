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
    public class TIPOETIQUETAController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/TIPOETIQUETAs
        public IQueryable<TIPOETIQUETA> GetTIPOETIQUETA()
        {
            return db.TIPOETIQUETA;
        }

        // GET: api/TIPOETIQUETAs/5
        [ResponseType(typeof(TIPOETIQUETA))]
        public async Task<IHttpActionResult> GetTIPOETIQUETA(int id)
        {
            TIPOETIQUETA tIPOETIQUETA = await db.TIPOETIQUETA.FindAsync(id);
            if (tIPOETIQUETA == null)
            {
                return NotFound();
            }

            return Ok(tIPOETIQUETA);
        }

        // PUT: api/TIPOETIQUETAs/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTIPOETIQUETA(int id, TIPOETIQUETA tIPOETIQUETA)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tIPOETIQUETA.id_tipoEtiqueta)
            {
                return BadRequest();
            }

            db.Entry(tIPOETIQUETA).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TIPOETIQUETAExists(id))
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

        // POST: api/TIPOETIQUETAs
        [ResponseType(typeof(TIPOETIQUETA))]
        public async Task<IHttpActionResult> PostTIPOETIQUETA(TIPOETIQUETA tIPOETIQUETA)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TIPOETIQUETA.Add(tIPOETIQUETA);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = tIPOETIQUETA.id_tipoEtiqueta }, tIPOETIQUETA);
        }

        // DELETE: api/TIPOETIQUETAs/5
        [ResponseType(typeof(TIPOETIQUETA))]
        public async Task<IHttpActionResult> DeleteTIPOETIQUETA(int id)
        {
            TIPOETIQUETA tIPOETIQUETA = await db.TIPOETIQUETA.FindAsync(id);
            if (tIPOETIQUETA == null)
            {
                return NotFound();
            }

            db.TIPOETIQUETA.Remove(tIPOETIQUETA);
            await db.SaveChangesAsync();

            return Ok(tIPOETIQUETA);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TIPOETIQUETAExists(int id)
        {
            return db.TIPOETIQUETA.Count(e => e.id_tipoEtiqueta == id) > 0;
        }
    }
}