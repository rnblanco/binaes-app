using backend.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace backend.Controllers
{
    [Authorize]
    public class EJEMPLARController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // GET: api/EJEMPLAR
        public IQueryable<EJEMPLAR_E_F_I_C> GetEJEMPLAR()
        {
            var exemplars = db.EJEMPLAR.ToList();
            List<EJEMPLAR_E_F_I_C> exemplarsList = new List<EJEMPLAR_E_F_I_C>();
            foreach (var exemplar in exemplars)
            {
                EJEMPLAR_E_F_I_C eJEMPLAR = new EJEMPLAR_E_F_I_C();
                eJEMPLAR.id_Ejemplar = exemplar.id_Ejemplar;
                eJEMPLAR.nombre = exemplar.nombre;
                eJEMPLAR.imagen = Encoding.UTF8.GetString(exemplar.imagen);
                eJEMPLAR.EDITORIAL = exemplar.EDITORIAL;
                eJEMPLAR.FORMATOEJEMPLAR = exemplar.FORMATOEJEMPLAR;
                eJEMPLAR.IDIOMAEJEMPLAR = exemplar.IDIOMAEJEMPLAR;
                eJEMPLAR.f_publicacion = exemplar.f_publicacion;

                eJEMPLAR.COLECCION = new COLECCION_A_GC_TC();
                eJEMPLAR.COLECCION.id_Coleccion = exemplar.COLECCION.id_Coleccion;
                eJEMPLAR.COLECCION.nombre = exemplar.COLECCION.nombre;

                eJEMPLAR.COLECCION.AREA = new AREA_PA_U_TA();
                eJEMPLAR.COLECCION.AREA.id_Area = exemplar.COLECCION.AREA.id_Area;
                eJEMPLAR.COLECCION.AREA.nombre = exemplar.COLECCION.AREA.nombre;
                eJEMPLAR.COLECCION.AREA.descripcion = exemplar.COLECCION.AREA.descripcion;
                eJEMPLAR.COLECCION.AREA.PISOAREA = exemplar.COLECCION.AREA.PISOAREA;

                eJEMPLAR.COLECCION.AREA.USUARIO = new USUARIO_rU();
                eJEMPLAR.COLECCION.AREA.USUARIO.id_Usuario = exemplar.COLECCION.AREA.USUARIO.id_Usuario;
                eJEMPLAR.COLECCION.AREA.USUARIO.nombre = exemplar.COLECCION.AREA.USUARIO.nombre;
                eJEMPLAR.COLECCION.AREA.USUARIO.email = exemplar.COLECCION.AREA.USUARIO.email;
                eJEMPLAR.COLECCION.AREA.USUARIO.telefono = exemplar.COLECCION.AREA.USUARIO.telefono;
                eJEMPLAR.COLECCION.AREA.USUARIO.ocupacion = exemplar.COLECCION.AREA.USUARIO.ocupacion;
                eJEMPLAR.COLECCION.AREA.USUARIO.direccion = exemplar.COLECCION.AREA.USUARIO.direccion;
                eJEMPLAR.COLECCION.AREA.USUARIO.fotografia = Encoding.UTF8.GetString(exemplar.COLECCION.AREA.USUARIO.fotografia);
                eJEMPLAR.COLECCION.AREA.USUARIO.institucion = exemplar.COLECCION.AREA.USUARIO.institucion;
                eJEMPLAR.COLECCION.AREA.USUARIO.ROLUSUARIO = exemplar.COLECCION.AREA.USUARIO.ROLUSUARIO;

                eJEMPLAR.COLECCION.AREA.TIPOAREA = exemplar.COLECCION.AREA.TIPOAREA;

                eJEMPLAR.COLECCION.GENEROCOLECCION = exemplar.COLECCION.GENEROCOLECCION;
                eJEMPLAR.COLECCION.TIPOCOLECCION = exemplar.COLECCION.TIPOCOLECCION;

                exemplarsList.Add(eJEMPLAR);
            }
            return exemplarsList.AsQueryable();
        }

        [ResponseType(typeof(EJEMPLAR_E_F_I_C))]
        // GET: api/EJEMPLAR?limit=5&page=1&search=test&sortby=col:ASC
        public async Task<IHttpActionResult> GetEJEMPLAR(int limit, int page, string search, string SortBy)
        {
            var sorted = "id_Ejemplar ascending";
            if (SortBy != null)
            {
                string[] sortby = SortBy.Split(':');
                sorted = sortby[0] + " " + (sortby[1].Equals("ASC") ? "ascending" : "descending");
            }

            int total = db.EJEMPLAR
                .GroupJoin(
                    db.AUTORxEJEMPLAR,
                    a => a.id_Ejemplar,
                    b => b.id_Ejemplar,
                    (a, c) => new
                    {
                        id_Ejemplar = a.id_Ejemplar,
                        nombre = a.nombre,
                        imagen = a.imagen,
                        EDITORIAL = a.EDITORIAL,
                        FORMATOEJEMPLAR = a.FORMATOEJEMPLAR,
                        IDIOMAEJEMPLAR = a.IDIOMAEJEMPLAR,
                        f_publicacion = a.f_publicacion,
                        COLECCION = a.COLECCION,
                        c
                    }
                 ).SelectMany(x => x.c.DefaultIfEmpty(), (x, b) => new
                 {
                     id_Ejemplar = x.id_Ejemplar,
                     nombre = x.nombre,
                     imagen = x.imagen,
                     EDITORIAL = x.EDITORIAL,
                     FORMATOEJEMPLAR = x.FORMATOEJEMPLAR,
                     IDIOMAEJEMPLAR = x.IDIOMAEJEMPLAR,
                     f_publicacion = x.f_publicacion,
                     COLECCION = x.COLECCION,
                     autor = x.c.DefaultIfEmpty(),
                     autorE = b.AUTOR.nombre
                 })
                .GroupJoin(
                    db.P_CLAVExEJEMPLAR,
                    a => a.id_Ejemplar,
                    b => b.EJEMPLAR.id_Ejemplar,
                    (a, c) => new
                    {
                        id_Ejemplar = a.id_Ejemplar,
                        nombre = a.nombre,
                        imagen = a.imagen,
                        EDITORIAL = a.EDITORIAL,
                        FORMATOEJEMPLAR = a.FORMATOEJEMPLAR,
                        IDIOMAEJEMPLAR = a.IDIOMAEJEMPLAR,
                        f_publicacion = a.f_publicacion,
                        COLECCION = a.COLECCION,
                        autorE = a.autorE,
                        c
                    }
                ).SelectMany(x => x.c.DefaultIfEmpty(), (x, b) => new
                {
                    id_Ejemplar = x.id_Ejemplar,
                    nombre = x.nombre,
                    imagen = x.imagen,
                    EDITORIAL = x.EDITORIAL,
                    FORMATOEJEMPLAR = x.FORMATOEJEMPLAR,
                    IDIOMAEJEMPLAR = x.IDIOMAEJEMPLAR,
                    f_publicacion = x.f_publicacion,
                    COLECCION = x.COLECCION,
                    autorE = x.autorE,
                    pclave = x.c.DefaultIfEmpty(),
                    p_clave = b.P_CLAVE.p_clave
                }).GroupJoin(
                    db.ETIQUETASxEJEMPLAR,
                    a => a.id_Ejemplar,
                    b => b.EJEMPLAR.id_Ejemplar,
                    (a, c) => new
                    {
                        id_Ejemplar = a.id_Ejemplar,
                        nombre = a.nombre,
                        imagen = a.imagen,
                        EDITORIAL = a.EDITORIAL,
                        FORMATOEJEMPLAR = a.FORMATOEJEMPLAR,
                        IDIOMAEJEMPLAR = a.IDIOMAEJEMPLAR,
                        f_publicacion = a.f_publicacion,
                        COLECCION = a.COLECCION,
                        autorE = a.autorE,
                        p_clave = a.p_clave,
                        c
                    }
                ).SelectMany(x => x.c.DefaultIfEmpty(), (x, b) => new
                {
                    id_Ejemplar = x.id_Ejemplar,
                    nombre = x.nombre,
                    imagen = x.imagen,
                    EDITORIAL = x.EDITORIAL,
                    FORMATOEJEMPLAR = x.FORMATOEJEMPLAR,
                    IDIOMAEJEMPLAR = x.IDIOMAEJEMPLAR,
                    f_publicacion = x.f_publicacion,
                    COLECCION = x.COLECCION,
                    autorE = x.autorE,
                    p_clave = x.p_clave,
                    etiqueta = x.c.DefaultIfEmpty(),
                    etiqueta_E = b.etiqueta
                })
                .Where(x =>
                    DbFunctions.Like(x.nombre, "%" + search + "%") ||
                    DbFunctions.Like(x.EDITORIAL.editorial1, "%" + search + "%") ||
                    DbFunctions.Like(x.FORMATOEJEMPLAR.formato, "%" + search + "%") ||
                    DbFunctions.Like(x.IDIOMAEJEMPLAR.idioma, "%" + search + "%") ||
                    DbFunctions.Like(DbFunctions.TruncateTime(x.f_publicacion).ToString(), "%" + search + "%") ||
                    DbFunctions.Like(x.COLECCION.nombre, "%" + search + "%") ||
                    DbFunctions.Like(x.COLECCION.AREA.nombre, "%" + search + "%") ||
                    DbFunctions.Like(x.COLECCION.GENEROCOLECCION.generoColeccion1, "%" + search + "%") ||
                    DbFunctions.Like(x.COLECCION.TIPOCOLECCION.tipoColeccion1, "%" + search + "%") ||
                    DbFunctions.Like(x.autorE, "%" + search + "%") ||
                    DbFunctions.Like(x.p_clave, "%" + search + "%") ||
                    DbFunctions.Like(x.etiqueta_E, "%" + search + "%")
                 )
                .GroupBy(x => x.id_Ejemplar).Select(x => x.FirstOrDefault())
                .OrderBy(sorted).Count();

            EJEMPLAR_PAGINADOR PAGINADOR = new EJEMPLAR_PAGINADOR();
            PAGINADOR.meta = new Meta();
            PAGINADOR.meta.totalItems = total;
            PAGINADOR.meta.itemsPerPage = limit;
            Double totalPages = (total + limit - 1) / limit;
            PAGINADOR.meta.totalPages = (int)Math.Round(totalPages);
            PAGINADOR.meta.currentPage = page > PAGINADOR.meta.totalPages ? 1 : page;
            PAGINADOR.data = new List<EJEMPLAR_E_F_I_C>();

            var exemplars = db.EJEMPLAR
                .GroupJoin(
                    db.AUTORxEJEMPLAR,
                    a => a.id_Ejemplar,
                    b => b.id_Ejemplar,
                    (a, c) => new
                    {
                        id_Ejemplar = a.id_Ejemplar,
                        nombre = a.nombre,
                        imagen = a.imagen,
                        EDITORIAL = a.EDITORIAL,
                        FORMATOEJEMPLAR = a.FORMATOEJEMPLAR,
                        IDIOMAEJEMPLAR = a.IDIOMAEJEMPLAR,
                        f_publicacion = a.f_publicacion,
                        COLECCION = a.COLECCION,
                        c
                    }
                 ).SelectMany(x => x.c.DefaultIfEmpty(), (x, b) => new
                 {
                     id_Ejemplar = x.id_Ejemplar,
                     nombre = x.nombre,
                     imagen = x.imagen,
                     EDITORIAL = x.EDITORIAL,
                     FORMATOEJEMPLAR = x.FORMATOEJEMPLAR,
                     IDIOMAEJEMPLAR = x.IDIOMAEJEMPLAR,
                     f_publicacion = x.f_publicacion,
                     COLECCION = x.COLECCION,
                     autor = x.c.DefaultIfEmpty(),
                     autorE = b.AUTOR.nombre
                 })
                .GroupJoin(
                    db.P_CLAVExEJEMPLAR,
                    a => a.id_Ejemplar,
                    b => b.EJEMPLAR.id_Ejemplar,
                    (a, c) => new
                    {
                        id_Ejemplar = a.id_Ejemplar,
                        nombre = a.nombre,
                        imagen = a.imagen,
                        EDITORIAL = a.EDITORIAL,
                        FORMATOEJEMPLAR = a.FORMATOEJEMPLAR,
                        IDIOMAEJEMPLAR = a.IDIOMAEJEMPLAR,
                        f_publicacion = a.f_publicacion,
                        COLECCION = a.COLECCION,
                        autorE = a.autorE,
                        c
                    }
                ).SelectMany(x => x.c.DefaultIfEmpty(), (x, b) => new
                {
                    id_Ejemplar = x.id_Ejemplar,
                    nombre = x.nombre,
                    imagen = x.imagen,
                    EDITORIAL = x.EDITORIAL,
                    FORMATOEJEMPLAR = x.FORMATOEJEMPLAR,
                    IDIOMAEJEMPLAR = x.IDIOMAEJEMPLAR,
                    f_publicacion = x.f_publicacion,
                    COLECCION = x.COLECCION,
                    autorE = x.autorE,
                    pclave = x.c.DefaultIfEmpty(),
                    p_clave = b.P_CLAVE.p_clave
                }).GroupJoin(
                    db.ETIQUETASxEJEMPLAR,
                    a => a.id_Ejemplar,
                    b => b.EJEMPLAR.id_Ejemplar,
                    (a, c) => new
                    {
                        id_Ejemplar = a.id_Ejemplar,
                        nombre = a.nombre,
                        imagen = a.imagen,
                        EDITORIAL = a.EDITORIAL,
                        FORMATOEJEMPLAR = a.FORMATOEJEMPLAR,
                        IDIOMAEJEMPLAR = a.IDIOMAEJEMPLAR,
                        f_publicacion = a.f_publicacion,
                        COLECCION = a.COLECCION,
                        autorE = a.autorE,
                        p_clave = a.p_clave,
                        c
                    }
                ).SelectMany(x => x.c.DefaultIfEmpty(), (x, b) => new
                {
                    id_Ejemplar = x.id_Ejemplar,
                    nombre = x.nombre,
                    imagen = x.imagen,
                    EDITORIAL = x.EDITORIAL,
                    FORMATOEJEMPLAR = x.FORMATOEJEMPLAR,
                    IDIOMAEJEMPLAR = x.IDIOMAEJEMPLAR,
                    f_publicacion = x.f_publicacion,
                    COLECCION = x.COLECCION,
                    autorE = x.autorE,
                    p_clave = x.p_clave,
                    etiqueta = x.c.DefaultIfEmpty(),
                    etiqueta_E = b.etiqueta
                })
                .Where(x =>                    
                    DbFunctions.Like(x.nombre, "%" + search + "%") ||
                    DbFunctions.Like(x.EDITORIAL.editorial1, "%" + search + "%") ||
                    DbFunctions.Like(x.FORMATOEJEMPLAR.formato, "%" + search + "%") ||
                    DbFunctions.Like(x.IDIOMAEJEMPLAR.idioma, "%" + search + "%") ||
                    DbFunctions.Like(DbFunctions.TruncateTime(x.f_publicacion).ToString(), "%" + search + "%") ||
                    DbFunctions.Like(x.COLECCION.nombre, "%" + search + "%") ||
                    DbFunctions.Like(x.COLECCION.AREA.nombre, "%" + search + "%") ||
                    DbFunctions.Like(x.COLECCION.GENEROCOLECCION.generoColeccion1, "%" + search + "%") ||
                    DbFunctions.Like(x.COLECCION.TIPOCOLECCION.tipoColeccion1, "%" + search + "%") ||
                    DbFunctions.Like(x.autorE, "%" + search + "%") ||
                    DbFunctions.Like(x.p_clave, "%" + search + "%") ||
                    DbFunctions.Like(x.etiqueta_E, "%" + search + "%")
                 )
                .GroupBy(x => x.id_Ejemplar).Select(x => x.FirstOrDefault())
                .OrderBy(sorted).Skip((PAGINADOR.meta.currentPage - 1) * limit).Take(limit).ToList();
            List<EJEMPLAR_E_F_I_C> exemplarsList = new List<EJEMPLAR_E_F_I_C>();

            foreach (var exemplar in exemplars)
            {
                EJEMPLAR_E_F_I_C eJEMPLAR = new EJEMPLAR_E_F_I_C();
                eJEMPLAR.id_Ejemplar = exemplar.id_Ejemplar;
                eJEMPLAR.nombre = exemplar.nombre;
                eJEMPLAR.imagen = Encoding.UTF8.GetString(exemplar.imagen);
                eJEMPLAR.EDITORIAL = exemplar.EDITORIAL;
                eJEMPLAR.FORMATOEJEMPLAR = exemplar.FORMATOEJEMPLAR;
                eJEMPLAR.IDIOMAEJEMPLAR = exemplar.IDIOMAEJEMPLAR;
                eJEMPLAR.f_publicacion = exemplar.f_publicacion;

                eJEMPLAR.COLECCION = new COLECCION_A_GC_TC();
                eJEMPLAR.COLECCION.id_Coleccion = exemplar.COLECCION.id_Coleccion;
                eJEMPLAR.COLECCION.nombre = exemplar.COLECCION.nombre;

                eJEMPLAR.COLECCION.AREA = new AREA_PA_U_TA();
                eJEMPLAR.COLECCION.AREA.id_Area = exemplar.COLECCION.AREA.id_Area;
                eJEMPLAR.COLECCION.AREA.nombre = exemplar.COLECCION.AREA.nombre;
                eJEMPLAR.COLECCION.AREA.descripcion = exemplar.COLECCION.AREA.descripcion;
                eJEMPLAR.COLECCION.AREA.PISOAREA = exemplar.COLECCION.AREA.PISOAREA;
                eJEMPLAR.COLECCION.AREA.capacidad = exemplar.COLECCION.AREA.capacidad;

                eJEMPLAR.COLECCION.AREA.TIPOAREA = exemplar.COLECCION.AREA.TIPOAREA;

                eJEMPLAR.COLECCION.GENEROCOLECCION = exemplar.COLECCION.GENEROCOLECCION;
                eJEMPLAR.COLECCION.TIPOCOLECCION = exemplar.COLECCION.TIPOCOLECCION;

                eJEMPLAR.P_CLAVExEJEMPLAR = new List<P_CLAVExEJEMPLAR_E>();

                List<P_CLAVExEJEMPLAR> p_CLAVExEJEMPLAR = db.P_CLAVExEJEMPLAR.Where(x => x.id_Ejemplar == eJEMPLAR.id_Ejemplar).ToList();

                foreach (var item in p_CLAVExEJEMPLAR)
                {
                    P_CLAVExEJEMPLAR_E p_CLAVExEJEMPLAR_E = new P_CLAVExEJEMPLAR_E();
                    p_CLAVExEJEMPLAR_E.id_pClaveEjemplar = item.id_pClaveEjemplar;

                    p_CLAVExEJEMPLAR_E.P_CLAVE = new P_CLAVE();
                    p_CLAVExEJEMPLAR_E.P_CLAVE.id_p_clave = item.id_p_clave;
                    p_CLAVExEJEMPLAR_E.P_CLAVE.p_clave = item.P_CLAVE.p_clave;

                    eJEMPLAR.P_CLAVExEJEMPLAR.Add(p_CLAVExEJEMPLAR_E);
                }

                eJEMPLAR.P_CLAVE = new List<P_CLAVE>();

                foreach (var item in eJEMPLAR.P_CLAVExEJEMPLAR)
                {
                    P_CLAVE p_Clave = db.P_CLAVE.Where(x => x.id_p_clave == item.P_CLAVE.id_p_clave).FirstOrDefault();
                    eJEMPLAR.P_CLAVE.Add(p_Clave);
                }

                eJEMPLAR.ETIQUETASxEJEMPLAR = new List<ETIQUETASxEJEMPLAR_TE_E>();
                List<ETIQUETASxEJEMPLAR> eTIQUETASxEJEMPLARs = db.ETIQUETASxEJEMPLAR.Where(x => x.id_Ejemplar == eJEMPLAR.id_Ejemplar).ToList();

                foreach (var item in eTIQUETASxEJEMPLARs)
                {
                    ETIQUETASxEJEMPLAR_TE_E eTIQUETASxEJEMPLAR_TE_ = new ETIQUETASxEJEMPLAR_TE_E();
                    eTIQUETASxEJEMPLAR_TE_.id_etiquetaEjemplar = item.id_etiquetaEjemplar;

                    eTIQUETASxEJEMPLAR_TE_.etiqueta = item.etiqueta;

                    eTIQUETASxEJEMPLAR_TE_.TIPOETIQUETA = new TIPOETIQUETA();
                    eTIQUETASxEJEMPLAR_TE_.TIPOETIQUETA.id_tipoEtiqueta = item.TIPOETIQUETA.id_tipoEtiqueta;
                    eTIQUETASxEJEMPLAR_TE_.TIPOETIQUETA.tipoEtiqueta1 = item.TIPOETIQUETA.tipoEtiqueta1;

                    eJEMPLAR.ETIQUETASxEJEMPLAR.Add(eTIQUETASxEJEMPLAR_TE_);
                }

                eJEMPLAR.TIPOETIQUETA = new List<TIPOETIQUETA>();

                foreach (var item in eJEMPLAR.ETIQUETASxEJEMPLAR)
                {
                    TIPOETIQUETA tIPOETIQUETA = db.TIPOETIQUETA.Where(x => x.id_tipoEtiqueta == item.TIPOETIQUETA.id_tipoEtiqueta).FirstOrDefault();
                    eJEMPLAR.TIPOETIQUETA.Add(tIPOETIQUETA);
                }

                eJEMPLAR.AUTORxEJEMPLAR = new List<AUTORxEJEMPLAR_A_E>();
                List<AUTORxEJEMPLAR> aUTORxEJEMPLARs = db.AUTORxEJEMPLAR.Where(x => x.id_Ejemplar == eJEMPLAR.id_Ejemplar).ToList();

                foreach (var item in aUTORxEJEMPLARs)
                {
                    AUTORxEJEMPLAR_A_E aUTORxEJEMPLAR_A_E = new AUTORxEJEMPLAR_A_E();
                    aUTORxEJEMPLAR_A_E.id_autorEjemplar = item.id_autorEjemplar;

                    aUTORxEJEMPLAR_A_E.AUTOR = new AUTOR();
                    aUTORxEJEMPLAR_A_E.AUTOR.id_Autor = item.AUTOR.id_Autor;
                    aUTORxEJEMPLAR_A_E.AUTOR.nombre = item.AUTOR.nombre;

                    eJEMPLAR.AUTORxEJEMPLAR.Add(aUTORxEJEMPLAR_A_E);
                }

                eJEMPLAR.AUTOR = new List<AUTOR>();

                foreach (var item in eJEMPLAR.AUTORxEJEMPLAR)
                {
                    AUTOR aUTOR = db.AUTOR.Where(x => x.id_Autor == item.AUTOR.id_Autor).FirstOrDefault();
                    eJEMPLAR.AUTOR.Add(aUTOR);
                }
                PAGINADOR.data.Add(eJEMPLAR);
            }

            return Ok(PAGINADOR);
        }

        // GET: api/EJEMPLAR/5
        [ResponseType(typeof(EJEMPLAR_E_F_I_C))]
        public async Task<IHttpActionResult> GetEJEMPLAR(int id)
        {
            var exemplar = await db.EJEMPLAR.FindAsync(id);
            EJEMPLAR_E_F_I_C eJEMPLAR = new EJEMPLAR_E_F_I_C();
            if (exemplar == null)
            {
                return NotFound();
            }
            else
            {
                eJEMPLAR.id_Ejemplar = exemplar.id_Ejemplar;
                eJEMPLAR.nombre = exemplar.nombre;
                eJEMPLAR.imagen = Encoding.UTF8.GetString(exemplar.imagen);
                eJEMPLAR.EDITORIAL = exemplar.EDITORIAL;
                eJEMPLAR.FORMATOEJEMPLAR = exemplar.FORMATOEJEMPLAR;
                eJEMPLAR.IDIOMAEJEMPLAR = exemplar.IDIOMAEJEMPLAR;
                eJEMPLAR.f_publicacion = exemplar.f_publicacion;

                eJEMPLAR.COLECCION = new COLECCION_A_GC_TC();
                eJEMPLAR.COLECCION.id_Coleccion = exemplar.COLECCION.id_Coleccion;
                eJEMPLAR.COLECCION.nombre = exemplar.COLECCION.nombre;

                eJEMPLAR.COLECCION.AREA = new AREA_PA_U_TA();
                eJEMPLAR.COLECCION.AREA.id_Area = exemplar.COLECCION.AREA.id_Area;
                eJEMPLAR.COLECCION.AREA.nombre = exemplar.COLECCION.AREA.nombre;
                eJEMPLAR.COLECCION.AREA.descripcion = exemplar.COLECCION.AREA.descripcion;
                eJEMPLAR.COLECCION.AREA.PISOAREA = exemplar.COLECCION.AREA.PISOAREA;

                eJEMPLAR.COLECCION.AREA.TIPOAREA = exemplar.COLECCION.AREA.TIPOAREA;

                eJEMPLAR.COLECCION.GENEROCOLECCION = exemplar.COLECCION.GENEROCOLECCION;
                eJEMPLAR.COLECCION.TIPOCOLECCION = exemplar.COLECCION.TIPOCOLECCION;
            }

            return Ok(eJEMPLAR);
        }

        // PUT: api/EJEMPLAR/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutEJEMPLAR(int id, EJEMPLAR eJEMPLAR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != eJEMPLAR.id_Ejemplar)
            {
                return BadRequest();
            }

            db.Entry(eJEMPLAR).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EJEMPLARExists(id))
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

        // POST: api/EJEMPLAR
        [ResponseType(typeof(EJEMPLAR))]
        public async Task<IHttpActionResult> PostEJEMPLAR(EJEMPLAR eJEMPLAR)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EJEMPLAR.Add(eJEMPLAR);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = eJEMPLAR.id_Ejemplar }, eJEMPLAR);
        }

        // DELETE: api/EJEMPLAR/5
        [ResponseType(typeof(EJEMPLAR))]
        public async Task<IHttpActionResult> DeleteEJEMPLAR(int id)
        {
            EJEMPLAR eJEMPLAR = await db.EJEMPLAR.FindAsync(id);
            if (eJEMPLAR == null)
            {
                return NotFound();
            }

            db.EJEMPLAR.Remove(eJEMPLAR);
            await db.SaveChangesAsync();

            return Ok(eJEMPLAR);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EJEMPLARExists(int id)
        {
            return db.EJEMPLAR.Count(e => e.id_Ejemplar == id) > 0;
        }
    }
}