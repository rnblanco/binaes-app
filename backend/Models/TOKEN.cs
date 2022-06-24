namespace backend.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("TOKEN")]
    public partial class TOKEN
    {
        [Key]
        public int id_Token { get; set; }

        [Column("TOKEN")]
        [Required]
        [MaxLength(64)]
        public byte[] TOKEN1 { get; set; }

        [Required]
        [StringLength(8)]
        public string id_Usuario { get; set; }

        public DateTime fh_Expiracion { get; set; }

        public virtual USUARIO USUARIO { get; set; }
    }
}
