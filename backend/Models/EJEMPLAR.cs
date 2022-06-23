namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("EJEMPLAR")]
    public partial class EJEMPLAR
    {
        [Key]
        public int id_Ejemplar { get; set; }

        [Required]
        [StringLength(100)]
        public string nombre { get; set; }

        [Required]
        public byte[] imagen { get; set; }

        public int id_Editorial { get; set; }

        public int id_Formato { get; set; }

        public int id_Idioma { get; set; }

        [Column(TypeName = "date")]
        public DateTime f_publicacion { get; set; }

        public int id_coleccionPertenece { get; set; }

        [ForeignKey("id_coleccionPertenece")]
        public virtual COLECCION COLECCION { get; set; }

        public virtual EDITORIAL EDITORIAL { get; set; }

        [ForeignKey("id_Formato")]
        public virtual FORMATOEJEMPLAR FORMATOEJEMPLAR { get; set; }
        
        [ForeignKey("id_Idioma")]
        public virtual IDIOMAEJEMPLAR IDIOMAEJEMPLAR { get; set; }
    }

    public partial class EJEMPLAR_E_F_I_C
    {
        [Key]
        public int id_Ejemplar { get; set; }

        [Required]
        [StringLength(100)]
        public string nombre { get; set; }

        [Required]
        public byte[] imagen { get; set; }

        [Column(TypeName = "date")]
        public DateTime f_publicacion { get; set; }

        public virtual COLECCION_A_GC_TC COLECCION { get; set; }

        public virtual EDITORIAL EDITORIAL { get; set; }

        public virtual FORMATOEJEMPLAR FORMATOEJEMPLAR { get; set; }

        public virtual IDIOMAEJEMPLAR IDIOMAEJEMPLAR { get; set; }
    }
}
