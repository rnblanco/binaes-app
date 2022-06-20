namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("IDIOMAEJEMPLAR")]
    public partial class IDIOMAEJEMPLAR
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public IDIOMAEJEMPLAR()
        {
            EJEMPLAR = new HashSet<EJEMPLAR>();
        }

        [Key]
        public int id_idiomaEjemplar { get; set; }

        [Required]
        [StringLength(30)]
        public string idioma { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<EJEMPLAR> EJEMPLAR { get; set; }
    }
}
