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
    public class P_CLAVExEJEMPLARController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/P_CLAVExEJEMPLAR
        public IQueryable<P_CLAVExEJEMPLAR> GetP_CLAVExEJEMPLAR()
        {
            return db.P_CLAVExEJEMPLAR;
        }

        // GET: api/P_CLAVExEJEMPLAR/5
        [ResponseType(typeof(P_CLAVExEJEMPLAR))]
        public async Task<IHttpActionResult> GetP_CLAVExEJEMPLAR(int id)
        {
            P_CLAVExEJEMPLAR p_CLAVExEJEMPLAR = await db.P_CLAVExEJEMPLAR.FindAsync(id);
            if (p_CLAVExEJEMPLAR == null)
            {
                return NotFound();
            }

            return Ok(p_CLAVExEJEMPLAR);
        }

        // PUT: api/P_CLAVExEJEMPLAR/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutP_CLAVExEJEMPLAR(int id, P_CLAVExEJEMPLAR p_CLAVExEJEMPLAR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != p_CLAVExEJEMPLAR.id_p_Clave)
            {
                return BadRequest();
            }

            db.Entry(p_CLAVExEJEMPLAR).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!P_CLAVExEJEMPLARExists(id))
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

        // POST: api/P_CLAVExEJEMPLAR
        [ResponseType(typeof(P_CLAVExEJEMPLAR))]
        public async Task<IHttpActionResult> PostP_CLAVExEJEMPLAR(P_CLAVExEJEMPLAR p_CLAVExEJEMPLAR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.P_CLAVExEJEMPLAR.Add(p_CLAVExEJEMPLAR);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = p_CLAVExEJEMPLAR.id_p_Clave }, p_CLAVExEJEMPLAR);
        }

        // DELETE: api/P_CLAVExEJEMPLAR/5
        [ResponseType(typeof(P_CLAVExEJEMPLAR))]
        public async Task<IHttpActionResult> DeleteP_CLAVExEJEMPLAR(int id)
        {
            P_CLAVExEJEMPLAR p_CLAVExEJEMPLAR = await db.P_CLAVExEJEMPLAR.FindAsync(id);
            if (p_CLAVExEJEMPLAR == null)
            {
                return NotFound();
            }

            db.P_CLAVExEJEMPLAR.Remove(p_CLAVExEJEMPLAR);
            await db.SaveChangesAsync();

            return Ok(p_CLAVExEJEMPLAR);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool P_CLAVExEJEMPLARExists(int id)
        {
            return db.P_CLAVExEJEMPLAR.Count(e => e.id_p_Clave == id) > 0;
        }
    }
}