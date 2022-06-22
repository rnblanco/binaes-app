namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("PRESTAMO")]
    public partial class PRESTAMO
    {
        [Key]
        public int id_Prestamo { get; set; }

        public DateTime fh_Prestamo { get; set; }

        public DateTime fh_Devolucion { get; set; }

        public int id_Estado { get; set; }

        [Required]
        [StringLength(8)]
        public string id_usuarioPresta { get; set; }

        public int id_Ejemplar { get; set; }
        
        public virtual EJEMPLAR EJEMPLAR { get; set; }   
        
        public virtual ESTADOS ESTADOS { get; set; }

        [ForeignKey("id_usuarioPresta")]
        public virtual USUARIO USUARIO { get; set; }
    }
    public partial class PRESTAMO_E
    {
        [Key]
        public int id_Prestamo { get; set; }

        public DateTime fh_Prestamo { get; set; }

        public DateTime fh_Devolucion { get; set; }

        public virtual EJEMPLAR_E_F_I_C EJEMPLAR { get; set; }

        public virtual ESTADOS ESTADOS { get; set; }

        public virtual USUARIO_rU USUARIO { get; set; }
    }
}
