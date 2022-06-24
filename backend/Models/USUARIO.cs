namespace backend.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("USUARIO")]
    public partial class USUARIO
    {
        [Key]
        [StringLength(8)]
        public string id_Usuario { get; set; }

        [Required]
        [StringLength(50)]
        public string nombre { get; set; }

        [Required]
        [StringLength(50)]
        public string email { get; set; }

        [Required]
        [StringLength(12)]
        public string telefono { get; set; }

        [Required]
        [StringLength(15)]
        public string ocupacion { get; set; }

        [Required]
        [StringLength(100)]
        public string direccion { get; set; }

        [Required]
        public byte[] fotografia { get; set; }

        [Required]
        [StringLength(50)]
        public string institucion { get; set; }

        public int id_rolUsuario { get; set; }

        [Required]
        [MaxLength(256)]
        public byte[] contrasena { get; set; }

        public virtual ROLUSUARIO ROLUSUARIO { get; set; }
    }

    public partial class USUARIO_rU
    {
        [Key]
        [StringLength(8)]
        public string id_Usuario { get; set; }

        [Required]
        [StringLength(50)]
        public string nombre { get; set; }

        [Required]
        [StringLength(50)]
        public string email { get; set; }

        [Required]
        [StringLength(12)]
        public string telefono { get; set; }

        [Required]
        [StringLength(15)]
        public string ocupacion { get; set; }

        [Required]
        [StringLength(100)]
        public string direccion { get; set; }

        [Required]
        public byte[] fotografia { get; set; }

        [Required]
        [StringLength(50)]
        public string institucion { get; set; }

        public virtual ROLUSUARIO ROLUSUARIO { get; set; }
    }
}
