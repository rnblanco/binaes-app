namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("ROLUSUARIO")]
    public partial class ROLUSUARIO
    {
        [Key]
        public int id_rolUsuario { get; set; }

        [Required]
        [StringLength(20)]
        public string rol { get; set; }
    }
}
