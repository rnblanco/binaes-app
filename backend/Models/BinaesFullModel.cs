using System.Data.Entity;

namespace backend.Models
{
    public partial class BinaesFullModel : DbContext
    {
        public BinaesFullModel()
            : base("name=BinaesFullModel")
        {
        }

        public virtual DbSet<AREA> AREA { get; set; }
        public virtual DbSet<AUTOR> AUTOR { get; set; }
        public virtual DbSet<AUTORxEJEMPLAR> AUTORxEJEMPLAR { get; set; }
        public virtual DbSet<COLECCION> COLECCION { get; set; }
        public virtual DbSet<EDITORIAL> EDITORIAL { get; set; }
        public virtual DbSet<EJEMPLAR> EJEMPLAR { get; set; }
        public virtual DbSet<ESTADOS> ESTADOS { get; set; }
        public virtual DbSet<EVENTO> EVENTO { get; set; }
        public virtual DbSet<FORMATOEJEMPLAR> FORMATOEJEMPLAR { get; set; }
        public virtual DbSet<GENEROCOLECCION> GENEROCOLECCION { get; set; }
        public virtual DbSet<HORARIOxAREA> HORARIOxAREA { get; set; }
        public virtual DbSet<IDIOMAEJEMPLAR> IDIOMAEJEMPLAR { get; set; }
        public virtual DbSet<OBJETIVOSxEVENTO> OBJETIVOSxEVENTO { get; set; }
        public virtual DbSet<P_CLAVExEJEMPLAR> P_CLAVExEJEMPLAR { get; set; }
        public virtual DbSet<PISOAREA> PISOAREA { get; set; }
        public virtual DbSet<PRESTAMO> PRESTAMO { get; set; }
        public virtual DbSet<RESERVA> RESERVA { get; set; }
        public virtual DbSet<ROLUSUARIO> ROLUSUARIO { get; set; }
        public virtual DbSet<TIPOAREA> TIPOAREA { get; set; }
        public virtual DbSet<TIPOCOLECCION> TIPOCOLECCION { get; set; }
        public virtual DbSet<TIPOETIQUETA> TIPOETIQUETA { get; set; }
        public virtual DbSet<TOKEN> TOKEN { get; set; }
        public virtual DbSet<USUARIO> USUARIO { get; set; }
        public virtual DbSet<VISITAS> VISITAS { get; set; }
        public virtual DbSet<ETIQUETASxEJEMPLAR> ETIQUETASxEJEMPLAR { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AREA>()
                .Property(e => e.nombre)
                .IsUnicode(false);

            modelBuilder.Entity<AREA>()
                .Property(e => e.descripcion)
                .IsUnicode(false);

            modelBuilder.Entity<AREA>()
                .Property(e => e.responsable)
                .IsUnicode(false);

            modelBuilder.Entity<AREA>()
                .Property(e => e.id_Area);

            /*modelBuilder.Entity<AREA>()
                .HasMany(e => e.COLECCION)
                .WithRequired(e => e.AREA)
                .HasForeignKey(e => e.id_areaPertenece)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<AREA>()
                .HasMany(e => e.EVENTO)
                .WithRequired(e => e.AREA)
                .HasForeignKey(e => e.id_areaRealizacion);

            modelBuilder.Entity<AREA>()
                .HasMany(e => e.VISITAS)
                .WithRequired(e => e.AREA)
                .WillCascadeOnDelete(false);*/

            modelBuilder.Entity<AUTOR>()
                .Property(e => e.nombre)
                .IsUnicode(false);

            /*modelBuilder.Entity<AUTOR>()
                .HasMany(e => e.AUTORxEJEMPLAR)
                .WithRequired(e => e.AUTOR)
                .WillCascadeOnDelete(false);*/

            modelBuilder.Entity<COLECCION>()
                .Property(e => e.nombre)
                .IsUnicode(false);

            /*modelBuilder.Entity<COLECCION>()
                .HasMany(e => e.EJEMPLAR)
                .WithRequired(e => e.COLECCION)
                .HasForeignKey(e => e.id_coleccionPertenece);*/

            modelBuilder.Entity<EDITORIAL>()
                .Property(e => e.editorial1)
                .IsUnicode(false);

            modelBuilder.Entity<EJEMPLAR>()
                .Property(e => e.nombre)
                .IsUnicode(false);

            /*modelBuilder.Entity<EJEMPLAR>()
                .HasMany(e => e.AUTORxEJEMPLAR)
                .WithRequired(e => e.EJEMPLAR)
                .WillCascadeOnDelete(false);*/

            /*modelBuilder.Entity<EJEMPLAR>()
                .HasMany(e => e.PRESTAMO)
                .WithRequired(e => e.EJEMPLAR)
                .WillCascadeOnDelete(false);*/

            modelBuilder.Entity<ESTADOS>()
                .Property(e => e.estado)
                .IsUnicode(false);

            modelBuilder.Entity<EVENTO>()
                .Property(e => e.titulo)
                .IsUnicode(false);

            modelBuilder.Entity<FORMATOEJEMPLAR>()
                .Property(e => e.formato)
                .IsUnicode(false);

            /*modelBuilder.Entity<FORMATOEJEMPLAR>()
                .HasMany(e => e.EJEMPLAR)
                .WithRequired(e => e.FORMATOEJEMPLAR)
                .HasForeignKey(e => e.id_Formato);*/

            modelBuilder.Entity<GENEROCOLECCION>()
                .Property(e => e.generoColeccion1)
                .IsUnicode(false);

            modelBuilder.Entity<IDIOMAEJEMPLAR>()
                .Property(e => e.idioma)
                .IsUnicode(false);

            /*modelBuilder.Entity<IDIOMAEJEMPLAR>()
                .HasMany(e => e.EJEMPLAR)
                .WithRequired(e => e.IDIOMAEJEMPLAR)
                .HasForeignKey(e => e.id_Idioma);*/

            modelBuilder.Entity<OBJETIVOSxEVENTO>()
                .Property(e => e.Objetivo)
                .IsUnicode(false);

            modelBuilder.Entity<P_CLAVExEJEMPLAR>()
                .Property(e => e.p_clave)
                .IsUnicode(false);

            modelBuilder.Entity<PISOAREA>()
                .Property(e => e.pisoArea1)
                .IsUnicode(false);

            modelBuilder.Entity<PRESTAMO>()
                .Property(e => e.id_usuarioPresta)
                .IsUnicode(false);

            modelBuilder.Entity<ROLUSUARIO>()
                .Property(e => e.rol)
                .IsUnicode(false);

            /*modelBuilder.Entity<ROLUSUARIO>()
                .HasMany(e => e.USUARIO)
                .WithRequired(e => e.ROLUSUARIO)
                .WillCascadeOnDelete(false);*/

            modelBuilder.Entity<TIPOAREA>()
                .Property(e => e.tipoArea1)
                .IsUnicode(false);

            modelBuilder.Entity<TIPOCOLECCION>()
                .Property(e => e.tipoColeccion1)
                .IsUnicode(false);

            modelBuilder.Entity<TIPOETIQUETA>()
                .Property(e => e.tipoEtiqueta1)
                .IsUnicode(false);

            modelBuilder.Entity<TOKEN>()
                .Property(e => e.TOKEN1)
                .IsFixedLength();

            modelBuilder.Entity<TOKEN>()
                .Property(e => e.id_Usuario)
                .IsUnicode(false);

            modelBuilder.Entity<USUARIO>()
                .Property(e => e.id_Usuario)
                .IsUnicode(false);

            modelBuilder.Entity<USUARIO>()
                .Property(e => e.nombre)
                .IsUnicode(false);

            modelBuilder.Entity<USUARIO>()
                .Property(e => e.email)
                .IsUnicode(false);

            modelBuilder.Entity<USUARIO>()
                .Property(e => e.telefono)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<USUARIO>()
                .Property(e => e.ocupacion)
                .IsUnicode(false);

            modelBuilder.Entity<USUARIO>()
                .Property(e => e.direccion)
                .IsUnicode(false);

            modelBuilder.Entity<USUARIO>()
                .Property(e => e.institucion)
                .IsUnicode(false);

            /*modelBuilder.Entity<USUARIO>()
                .HasMany(e => e.AREA)
                .WithRequired(e => e.USUARIO)
                .HasForeignKey(e => e.responsable)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<USUARIO>()
                .HasMany(e => e.PRESTAMO)
                .WithRequired(e => e.USUARIO)
                .HasForeignKey(e => e.id_usuarioPresta)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<USUARIO>()
                .HasMany(e => e.VISITAS)
                .WithRequired(e => e.USUARIO)
                .WillCascadeOnDelete(false);*/

            modelBuilder.Entity<VISITAS>()
                .Property(e => e.id_Usuario)
                .IsUnicode(false);
        }
    }
}
