﻿using backend.Models;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace backend.Controllers
{
    [Authorize]
    public class P_CLAVExEJEMPLARController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/P_CLAVExEJEMPLAR
        public IQueryable<P_CLAVExEJEMPLAR_E> GetP_CLAVExEJEMPLAR()
        {
            var keywords = db.P_CLAVExEJEMPLAR;
            List<P_CLAVExEJEMPLAR_E> keywordsList = new List<P_CLAVExEJEMPLAR_E>();

            foreach (var keyword in keywords)
            {
                P_CLAVExEJEMPLAR_E p_CLAVEx = new P_CLAVExEJEMPLAR_E();
                p_CLAVEx.id_pClaveEjemplar = keyword.id_pClaveEjemplar;
                p_CLAVEx.P_CLAVE = keyword.P_CLAVE;

                p_CLAVEx.EJEMPLAR = new EJEMPLAR_E_F_I_C();
                p_CLAVEx.EJEMPLAR.id_Ejemplar = keyword.EJEMPLAR.id_Ejemplar;
                p_CLAVEx.EJEMPLAR.nombre = keyword.EJEMPLAR.nombre;
                p_CLAVEx.EJEMPLAR.imagen = Encoding.UTF8.GetString(keyword.EJEMPLAR.imagen);
                p_CLAVEx.EJEMPLAR.EDITORIAL = keyword.EJEMPLAR.EDITORIAL;
                p_CLAVEx.EJEMPLAR.FORMATOEJEMPLAR = keyword.EJEMPLAR.FORMATOEJEMPLAR;
                p_CLAVEx.EJEMPLAR.IDIOMAEJEMPLAR = keyword.EJEMPLAR.IDIOMAEJEMPLAR;
                p_CLAVEx.EJEMPLAR.f_publicacion = keyword.EJEMPLAR.f_publicacion;

                p_CLAVEx.EJEMPLAR.COLECCION = new COLECCION_A_GC_TC();
                p_CLAVEx.EJEMPLAR.COLECCION.id_Coleccion = keyword.EJEMPLAR.COLECCION.id_Coleccion;
                p_CLAVEx.EJEMPLAR.COLECCION.nombre = keyword.EJEMPLAR.COLECCION.nombre;

                p_CLAVEx.EJEMPLAR.COLECCION.AREA = new AREA_PA_U_TA();
                p_CLAVEx.EJEMPLAR.COLECCION.AREA.id_Area = keyword.EJEMPLAR.COLECCION.AREA.id_Area;
                p_CLAVEx.EJEMPLAR.COLECCION.AREA.nombre = keyword.EJEMPLAR.COLECCION.AREA.nombre;
                p_CLAVEx.EJEMPLAR.COLECCION.AREA.descripcion = keyword.EJEMPLAR.COLECCION.AREA.descripcion;
                p_CLAVEx.EJEMPLAR.COLECCION.AREA.PISOAREA = keyword.EJEMPLAR.COLECCION.AREA.PISOAREA;

                keywordsList.Add(p_CLAVEx);
            }

            return keywordsList.AsQueryable();
        }

        // GET: api/P_CLAVExEJEMPLAR?id_Ejemplar=1
        public IQueryable<P_CLAVExEJEMPLAR_E> GetP_CLAVExEJEMPLAR(int id_Ejemplar)
        {
            var keywords = db.P_CLAVExEJEMPLAR.Where(x => x.id_Ejemplar == id_Ejemplar);
            List<P_CLAVExEJEMPLAR_E> keywordsList = new List<P_CLAVExEJEMPLAR_E>();

            foreach (var keyword in keywords)
            {
                P_CLAVExEJEMPLAR_E p_CLAVEx = new P_CLAVExEJEMPLAR_E();
                p_CLAVEx.id_pClaveEjemplar = keyword.id_pClaveEjemplar;
                p_CLAVEx.P_CLAVE = keyword.P_CLAVE;

                p_CLAVEx.EJEMPLAR = new EJEMPLAR_E_F_I_C();
                p_CLAVEx.EJEMPLAR.id_Ejemplar = keyword.EJEMPLAR.id_Ejemplar;
                p_CLAVEx.EJEMPLAR.nombre = keyword.EJEMPLAR.nombre;
                p_CLAVEx.EJEMPLAR.imagen = Encoding.UTF8.GetString(keyword.EJEMPLAR.imagen);
                p_CLAVEx.EJEMPLAR.EDITORIAL = keyword.EJEMPLAR.EDITORIAL;
                p_CLAVEx.EJEMPLAR.FORMATOEJEMPLAR = keyword.EJEMPLAR.FORMATOEJEMPLAR;
                p_CLAVEx.EJEMPLAR.IDIOMAEJEMPLAR = keyword.EJEMPLAR.IDIOMAEJEMPLAR;
                p_CLAVEx.EJEMPLAR.f_publicacion = keyword.EJEMPLAR.f_publicacion;

                p_CLAVEx.EJEMPLAR.COLECCION = new COLECCION_A_GC_TC();
                p_CLAVEx.EJEMPLAR.COLECCION.id_Coleccion = keyword.EJEMPLAR.COLECCION.id_Coleccion;
                p_CLAVEx.EJEMPLAR.COLECCION.nombre = keyword.EJEMPLAR.COLECCION.nombre;

                p_CLAVEx.EJEMPLAR.COLECCION.AREA = new AREA_PA_U_TA();
                p_CLAVEx.EJEMPLAR.COLECCION.AREA.id_Area = keyword.EJEMPLAR.COLECCION.AREA.id_Area;
                p_CLAVEx.EJEMPLAR.COLECCION.AREA.nombre = keyword.EJEMPLAR.COLECCION.AREA.nombre;
                p_CLAVEx.EJEMPLAR.COLECCION.AREA.descripcion = keyword.EJEMPLAR.COLECCION.AREA.descripcion;
                p_CLAVEx.EJEMPLAR.COLECCION.AREA.PISOAREA = keyword.EJEMPLAR.COLECCION.AREA.PISOAREA;                

                keywordsList.Add(p_CLAVEx);
            }

            return keywordsList.AsQueryable();
        }        

        // PUT: api/P_CLAVExEJEMPLAR/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutP_CLAVExEJEMPLAR(int id, P_CLAVExEJEMPLAR p_CLAVExEJEMPLAR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != p_CLAVExEJEMPLAR.id_pClaveEjemplar)
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

            return CreatedAtRoute("DefaultApi", new { id = p_CLAVExEJEMPLAR.id_pClaveEjemplar }, p_CLAVExEJEMPLAR);
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
            return db.P_CLAVExEJEMPLAR.Count(e => e.id_pClaveEjemplar == id) > 0;
        }
    }
}