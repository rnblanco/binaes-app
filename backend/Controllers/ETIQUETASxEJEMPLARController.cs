﻿using backend.Models;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace backend.Controllers
{
    [Authorize]
    public class ETIQUETASxEJEMPLARController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/ETIQUETASxEJEMPLAR
        public IQueryable<ETIQUETASxEJEMPLAR_TE_E> GetETIQUETASxEJEMPLAR()
        {
            var tags = db.ETIQUETASxEJEMPLAR.ToList();
            List<ETIQUETASxEJEMPLAR_TE_E> tagsList = new List<ETIQUETASxEJEMPLAR_TE_E>();
            foreach (var tag in tags)
            {
                ETIQUETASxEJEMPLAR_TE_E eTIQUETASxEJEMPLAR = new ETIQUETASxEJEMPLAR_TE_E();
                eTIQUETASxEJEMPLAR.id_etiquetaEjemplar = tag.id_etiquetaEjemplar;
                eTIQUETASxEJEMPLAR.TIPOETIQUETA = tag.TIPOETIQUETA;

                eTIQUETASxEJEMPLAR.EJEMPLAR = new EJEMPLAR_E_F_I_C();
                eTIQUETASxEJEMPLAR.EJEMPLAR.id_Ejemplar = tag.EJEMPLAR.id_Ejemplar;
                eTIQUETASxEJEMPLAR.EJEMPLAR.nombre = tag.EJEMPLAR.nombre;
                eTIQUETASxEJEMPLAR.EJEMPLAR.imagen = tag.EJEMPLAR.imagen;
                eTIQUETASxEJEMPLAR.EJEMPLAR.EDITORIAL = tag.EJEMPLAR.EDITORIAL;
                eTIQUETASxEJEMPLAR.EJEMPLAR.FORMATOEJEMPLAR = tag.EJEMPLAR.FORMATOEJEMPLAR;
                eTIQUETASxEJEMPLAR.EJEMPLAR.IDIOMAEJEMPLAR = tag.EJEMPLAR.IDIOMAEJEMPLAR;
                eTIQUETASxEJEMPLAR.EJEMPLAR.f_publicacion = tag.EJEMPLAR.f_publicacion;

                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION = new COLECCION_A_GC_TC();
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.id_Coleccion = tag.EJEMPLAR.COLECCION.id_Coleccion;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.nombre = tag.EJEMPLAR.COLECCION.nombre;

                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA = new AREA_PA_U_TA();
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.id_Area = tag.EJEMPLAR.COLECCION.AREA.id_Area;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.nombre = tag.EJEMPLAR.COLECCION.AREA.nombre;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.descripcion = tag.EJEMPLAR.COLECCION.AREA.descripcion;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.PISOAREA = tag.EJEMPLAR.COLECCION.AREA.PISOAREA;

                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.USUARIO = new USUARIO_rU();
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario = tag.EJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.USUARIO.nombre = tag.EJEMPLAR.COLECCION.AREA.USUARIO.nombre;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.USUARIO.email = tag.EJEMPLAR.COLECCION.AREA.USUARIO.email;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.USUARIO.telefono = tag.EJEMPLAR.COLECCION.AREA.USUARIO.telefono;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.USUARIO.ocupacion = tag.EJEMPLAR.COLECCION.AREA.USUARIO.ocupacion;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.USUARIO.direccion = tag.EJEMPLAR.COLECCION.AREA.USUARIO.direccion;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.USUARIO.fotografia = tag.EJEMPLAR.COLECCION.AREA.USUARIO.fotografia;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.USUARIO.institucion = tag.EJEMPLAR.COLECCION.AREA.USUARIO.institucion;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO = tag.EJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO;

                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.TIPOAREA = tag.EJEMPLAR.COLECCION.AREA.TIPOAREA;

                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.GENEROCOLECCION = tag.EJEMPLAR.COLECCION.GENEROCOLECCION;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.TIPOCOLECCION = tag.EJEMPLAR.COLECCION.TIPOCOLECCION;

                tagsList.Add(eTIQUETASxEJEMPLAR);
            }
            return tagsList.AsQueryable();
        }

        // GET: api/ETIQUETASxEJEMPLAR/5
        [ResponseType(typeof(ETIQUETASxEJEMPLAR_TE_E))]
        public async Task<IHttpActionResult> GetETIQUETASxEJEMPLAR(int id)
        {
            var tag = await db.ETIQUETASxEJEMPLAR.FindAsync(id);
            ETIQUETASxEJEMPLAR_TE_E eTIQUETASxEJEMPLAR = new ETIQUETASxEJEMPLAR_TE_E();
            if (tag == null)
            {
                return NotFound();
            }
            else
            {
                eTIQUETASxEJEMPLAR.id_etiquetaEjemplar = tag.id_etiquetaEjemplar;
                eTIQUETASxEJEMPLAR.TIPOETIQUETA = tag.TIPOETIQUETA;

                eTIQUETASxEJEMPLAR.EJEMPLAR = new EJEMPLAR_E_F_I_C();
                eTIQUETASxEJEMPLAR.EJEMPLAR.id_Ejemplar = tag.EJEMPLAR.id_Ejemplar;
                eTIQUETASxEJEMPLAR.EJEMPLAR.nombre = tag.EJEMPLAR.nombre;
                eTIQUETASxEJEMPLAR.EJEMPLAR.imagen = tag.EJEMPLAR.imagen;
                eTIQUETASxEJEMPLAR.EJEMPLAR.EDITORIAL = tag.EJEMPLAR.EDITORIAL;
                eTIQUETASxEJEMPLAR.EJEMPLAR.FORMATOEJEMPLAR = tag.EJEMPLAR.FORMATOEJEMPLAR;
                eTIQUETASxEJEMPLAR.EJEMPLAR.IDIOMAEJEMPLAR = tag.EJEMPLAR.IDIOMAEJEMPLAR;
                eTIQUETASxEJEMPLAR.EJEMPLAR.f_publicacion = tag.EJEMPLAR.f_publicacion;

                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION = new COLECCION_A_GC_TC();
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.id_Coleccion = tag.EJEMPLAR.COLECCION.id_Coleccion;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.nombre = tag.EJEMPLAR.COLECCION.nombre;

                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA = new AREA_PA_U_TA();
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.id_Area = tag.EJEMPLAR.COLECCION.AREA.id_Area;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.nombre = tag.EJEMPLAR.COLECCION.AREA.nombre;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.descripcion = tag.EJEMPLAR.COLECCION.AREA.descripcion;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.PISOAREA = tag.EJEMPLAR.COLECCION.AREA.PISOAREA;

                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.USUARIO = new USUARIO_rU();
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario = tag.EJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.USUARIO.nombre = tag.EJEMPLAR.COLECCION.AREA.USUARIO.nombre;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.USUARIO.email = tag.EJEMPLAR.COLECCION.AREA.USUARIO.email;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.USUARIO.telefono = tag.EJEMPLAR.COLECCION.AREA.USUARIO.telefono;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.USUARIO.ocupacion = tag.EJEMPLAR.COLECCION.AREA.USUARIO.ocupacion;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.USUARIO.direccion = tag.EJEMPLAR.COLECCION.AREA.USUARIO.direccion;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.USUARIO.fotografia = tag.EJEMPLAR.COLECCION.AREA.USUARIO.fotografia;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.USUARIO.institucion = tag.EJEMPLAR.COLECCION.AREA.USUARIO.institucion;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO = tag.EJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO;

                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.AREA.TIPOAREA = tag.EJEMPLAR.COLECCION.AREA.TIPOAREA;

                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.GENEROCOLECCION = tag.EJEMPLAR.COLECCION.GENEROCOLECCION;
                eTIQUETASxEJEMPLAR.EJEMPLAR.COLECCION.TIPOCOLECCION = tag.EJEMPLAR.COLECCION.TIPOCOLECCION;
            }

            return Ok(eTIQUETASxEJEMPLAR);
        }

        // PUT: api/ETIQUETASxEJEMPLAR/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutETIQUETASxEJEMPLAR(int id, ETIQUETASxEJEMPLAR eTIQUETASxEJEMPLAR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != eTIQUETASxEJEMPLAR.id_etiquetaEjemplar)
            {
                return BadRequest();
            }

            db.Entry(eTIQUETASxEJEMPLAR).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ETIQUETASxEJEMPLARExists(id))
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

        // POST: api/ETIQUETASxEJEMPLAR
        [ResponseType(typeof(ETIQUETASxEJEMPLAR))]
        public async Task<IHttpActionResult> PostETIQUETASxEJEMPLAR(ETIQUETASxEJEMPLAR eTIQUETASxEJEMPLAR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ETIQUETASxEJEMPLAR.Add(eTIQUETASxEJEMPLAR);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ETIQUETASxEJEMPLARExists(eTIQUETASxEJEMPLAR.id_etiquetaEjemplar))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = eTIQUETASxEJEMPLAR.id_etiquetaEjemplar }, eTIQUETASxEJEMPLAR);
        }

        // DELETE: api/ETIQUETASxEJEMPLAR/5
        [ResponseType(typeof(ETIQUETASxEJEMPLAR))]
        public async Task<IHttpActionResult> DeleteETIQUETASxEJEMPLAR(int id)
        {
            ETIQUETASxEJEMPLAR eTIQUETASxEJEMPLAR = await db.ETIQUETASxEJEMPLAR.FindAsync(id);
            if (eTIQUETASxEJEMPLAR == null)
            {
                return NotFound();
            }

            db.ETIQUETASxEJEMPLAR.Remove(eTIQUETASxEJEMPLAR);
            await db.SaveChangesAsync();

            return Ok(eTIQUETASxEJEMPLAR);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ETIQUETASxEJEMPLARExists(int id)
        {
            return db.ETIQUETASxEJEMPLAR.Count(e => e.id_etiquetaEjemplar == id) > 0;
        }
    }
}