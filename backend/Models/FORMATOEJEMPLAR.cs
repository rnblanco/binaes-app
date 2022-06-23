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
        [Key]
        public int id_formatoEjemplar { get; set; }

        [Required]
        [StringLength(30)]
        public string formato { get; set; }
    }
}
