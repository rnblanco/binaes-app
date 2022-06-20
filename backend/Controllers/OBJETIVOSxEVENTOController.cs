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
    public class OBJETIVOSxEVENTOController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/OBJETIVOSxEVENTO
        public IQueryable<OBJETIVOSxEVENTO> GetOBJETIVOSxEVENTO()
        {
            return db.OBJETIVOSxEVENTO;
        }

        // GET: api/OBJETIVOSxEVENTO/5
        [ResponseType(typeof(OBJETIVOSxEVENTO))]
        public async Task<IHttpActionResult> GetOBJETIVOSxEVENTO(int id)
        {
            OBJETIVOSxEVENTO oBJETIVOSxEVENTO = await db.OBJETIVOSxEVENTO.FindAsync(id);
            if (oBJETIVOSxEVENTO == null)
            {
                return NotFound();
            }

            return Ok(oBJETIVOSxEVENTO);
        }

        // PUT: api/OBJETIVOSxEVENTO/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutOBJETIVOSxEVENTO(int id, OBJETIVOSxEVENTO oBJETIVOSxEVENTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != oBJETIVOSxEVENTO.id_Objetivo)
            {
                return BadRequest();
            }

            db.Entry(oBJETIVOSxEVENTO).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OBJETIVOSxEVENTOExists(id))
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

        // POST: api/OBJETIVOSxEVENTO
        [ResponseType(typeof(OBJETIVOSxEVENTO))]
        public async Task<IHttpActionResult> PostOBJETIVOSxEVENTO(OBJETIVOSxEVENTO oBJETIVOSxEVENTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.OBJETIVOSxEVENTO.Add(oBJETIVOSxEVENTO);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = oBJETIVOSxEVENTO.id_Objetivo }, oBJETIVOSxEVENTO);
        }

        // DELETE: api/OBJETIVOSxEVENTO/5
        [ResponseType(typeof(OBJETIVOSxEVENTO))]
        public async Task<IHttpActionResult> DeleteOBJETIVOSxEVENTO(int id)
        {
            OBJETIVOSxEVENTO oBJETIVOSxEVENTO = await db.OBJETIVOSxEVENTO.FindAsync(id);
            if (oBJETIVOSxEVENTO == null)
            {
                return NotFound();
            }

            db.OBJETIVOSxEVENTO.Remove(oBJETIVOSxEVENTO);
            await db.SaveChangesAsync();

            return Ok(oBJETIVOSxEVENTO);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool OBJETIVOSxEVENTOExists(int id)
        {
            return db.OBJETIVOSxEVENTO.Count(e => e.id_Objetivo == id) > 0;
        }
    }
}