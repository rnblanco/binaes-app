namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class ESTADOS
    {
        [Key]
        public int id_Estado { get; set; }

        [Required]
        [StringLength(20)]
        public string estado { get; set; }
    }
}
