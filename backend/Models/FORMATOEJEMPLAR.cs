namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("FORMATOEJEMPLAR")]
    public partial class FORMATOEJEMPLAR
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public FORMATOEJEMPLAR()
        {
            EJEMPLAR = new HashSet<EJEMPLAR>();
        }

        [Key]
        public int id_formatoEjemplar { get; set; }

        [Required]
        [StringLength(30)]
        public string formato { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<EJEMPLAR> EJEMPLAR { get; set; }
    }
}
