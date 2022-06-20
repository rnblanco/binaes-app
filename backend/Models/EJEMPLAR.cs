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
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public EJEMPLAR()
        {
            AUTORxEJEMPLAR = new HashSet<AUTORxEJEMPLAR>();
            P_CLAVExEJEMPLAR = new HashSet<P_CLAVExEJEMPLAR>();
            PRESTAMO = new HashSet<PRESTAMO>();
        }

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

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<AUTORxEJEMPLAR> AUTORxEJEMPLAR { get; set; }

        public virtual COLECCION COLECCION { get; set; }

        public virtual EDITORIAL EDITORIAL { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<P_CLAVExEJEMPLAR> P_CLAVExEJEMPLAR { get; set; }

        public virtual FORMATOEJEMPLAR FORMATOEJEMPLAR { get; set; }

        public virtual IDIOMAEJEMPLAR IDIOMAEJEMPLAR { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PRESTAMO> PRESTAMO { get; set; }
    }
}
