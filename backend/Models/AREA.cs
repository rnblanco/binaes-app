namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("AREA")]
    public partial class AREA
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public AREA()
        {
            COLECCION = new HashSet<COLECCION>();
            EVENTO = new HashSet<EVENTO>();
            HORARIOxAREA = new HashSet<HORARIOxAREA>();
            VISITAS = new HashSet<VISITAS>();
        }

        [Key]
        public int id_Area { get; set; }

        [Required]
        [StringLength(30)]
        public string nombre { get; set; }

        [Column(TypeName = "text")]
        [Required]
        public string descripcion { get; set; }

        public int id_tipoArea { get; set; }

        [Required]
        [StringLength(8)]
        public string responsable { get; set; }

        public int id_pisoArea { get; set; }

        public virtual PISOAREA PISOAREA { get; set; }

        public virtual USUARIO USUARIO { get; set; }

        public virtual TIPOAREA TIPOAREA { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<COLECCION> COLECCION { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<EVENTO> EVENTO { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<HORARIOxAREA> HORARIOxAREA { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<VISITAS> VISITAS { get; set; }
    }
}
