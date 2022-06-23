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
        [Key]
        public int id_idiomaEjemplar { get; set; }

        [Required]
        [StringLength(30)]
        public string idioma { get; set; }
    }
}
