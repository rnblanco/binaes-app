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
    public class VISITASController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/VISITAS
        public IQueryable<VISITAS> GetVISITAS()
        {
            return db.VISITAS;
        }

        // GET: api/VISITAS/5
        [ResponseType(typeof(VISITAS))]
        public async Task<IHttpActionResult> GetVISITAS(int id)
        {
            VISITAS vISITAS = await db.VISITAS.FindAsync(id);
            if (vISITAS == null)
            {
                return NotFound();
            }

            return Ok(vISITAS);
        }

        // PUT: api/VISITAS/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutVISITAS(int id, VISITAS vISITAS)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != vISITAS.id_Visita)
            {
                return BadRequest();
            }

            db.Entry(vISITAS).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VISITASExists(id))
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

        // POST: api/VISITAS
        [ResponseType(typeof(VISITAS))]
        public async Task<IHttpActionResult> PostVISITAS(VISITAS vISITAS)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.VISITAS.Add(vISITAS);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = vISITAS.id_Visita }, vISITAS);
        }

        // DELETE: api/VISITAS/5
        [ResponseType(typeof(VISITAS))]
        public async Task<IHttpActionResult> DeleteVISITAS(int id)
        {
            VISITAS vISITAS = await db.VISITAS.FindAsync(id);
            if (vISITAS == null)
            {
                return NotFound();
            }

            db.VISITAS.Remove(vISITAS);
            await db.SaveChangesAsync();

            return Ok(vISITAS);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool VISITASExists(int id)
        {
            return db.VISITAS.Count(e => e.id_Visita == id) > 0;
        }
    }
}