using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

using MailKit.Net.Smtp;
using MailKit;
using MimeKit;
using System.Web.Http.Description;

public class Email {
    public string email { get; set; }
}

namespace backend.Controllers
{
    public class EMAILSENDERController : ApiController
    {
        private BinaesFullModel db = new BinaesFullModel();

        // POST: api/EMAILSENDER/rblanco@binaes.com.sv
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PostMail(Email eMAIL)
        {
            USUARIO user = db.USUARIO.Where(x => x.email == eMAIL.email).FirstOrDefault();
            if (user != null)
            {
                string tokenchars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";
                Random random = new Random();
                string token = new string(Enumerable.Repeat(tokenchars, 64).Select(s => s[random.Next(s.Length)]).ToArray());

                TOKEN tOKEN = new TOKEN();
                tOKEN.TOKEN1 = Encoding.UTF8.GetBytes(token);
                tOKEN.id_Usuario = user.id_Usuario;
                tOKEN.fh_Expiracion = DateTime.Now.AddHours(2);

                TOKEN tokendb = db.TOKEN.Where(x => x.id_Usuario == user.id_Usuario).FirstOrDefault();

                TOKENController tOKENController = new TOKENController();
                if (tokendb == null)
                {
                    await tOKENController.PostTOKEN(tOKEN);
                }
                else
                {
                    tOKEN.id_Token = tokendb.id_Token;
                    await tOKENController.PutTOKEN(tokendb.id_Token, tOKEN);
                }
                sendMail(user.nombre, eMAIL.email, user.id_Usuario, token);
            }
            else
            {
                return NotFound();
            }
            return StatusCode(HttpStatusCode.NoContent);
        }

        private void sendMail(string nombre, string email, string id, string token)
        {
            String Server = "smtp.mailtrap.io";
            int Port = 587;

            String MailUser = "bdfd12ab7662f8";
            String MailPass = "630a402cd91e4a";

            MimeMessage message = new MimeMessage();
            message.From.Add(new MailboxAddress("Binaes-Support", MailUser));
            message.To.Add(new MailboxAddress(nombre, email));
            message.Subject = "Cambio de contraseña";

            BodyBuilder messageBody = new BodyBuilder();            
            messageBody.HtmlBody =
                "<body style=\"margin:0;padding:0;\">"+
                    "<table role=\"presentation\" style=\"font-family: Arial, sans-serif; width: 100%; border-collapse: collapse; border: 0; border-spacing: 0; background: #ffffff;\" width=\"100%\">"+
                        "<tr>"+
                            "<td align=\"center\" style=\"font-family: Arial, sans-serif; padding: 0;display:flex;align-items: center;justify-content: center;\">" +
                                "<table role=\"presentation\" style=\"font-family: Arial, sans-serif; width: 602px; border-collapse: collapse; border: 1px solid #cccccc; border-spacing: 0; text-align: left;\" width=\"602\" align=\"left\">"+
                                    "<tr>"+
                                        "<td align=\"center\" style=\"font-family: Arial, sans-serif; padding: 40px 0 30px 0; background: #2d2e81;\">"+
                                            "<img src=\"https://binaes-app.azurewebsites.net/assets/images/ux/binaes-full-width.jpg\" alt=\"\" width=\"300\" style=\"height:auto;display:block;\">"+
                                        "</td>"+
                                    "</tr>"+
                                    "<tr>"+
                                        "<td style=\"font-family: Arial, sans-serif; padding: 36px 30px 42px 30px;\">"+
                                            "<table role=\"presentation\" style=\"font-family: Arial, sans-serif; width: 100%; border-collapse: collapse; border: 0; border-spacing: 0;\" width=\"100%\">"+
                                                "<tr>"+
                                                    "<td style=\"font-family: Arial, sans-serif; padding: 0 0 36px 0; color: #153643;\">"+
                                                        "<h1 style=\"font-size: 24px; margin: 0 0 20px 0; font-family: Arial,sans-serif;\">Cambio de contraseña<h1>"+
                                                        "<a style=\"font-size:14px;cursor:pointer;border-style:none;padding:15px 20px;border-radius:0.5rem;background-color:#4338CA;color:#fff; text-decoration: none;\" href=\"https://binaes-app.azurewebsites.net/auth/recover-password?id_Usuario=" + id + "&token=" + token + "\">Cambiar contraseña</a>" +
                                                    "</td>" +
                                                "</tr>"+
                                            "</table>"+
                                        "</td>"+
                                    "</tr>"+
                                    "<tr>"+
                                        "<td style=\"font-family: Arial, sans-serif; padding: 30px; background: #2d2e81;\">"+
                                            "<table role=\"presentation\" style=\"width: 100%; border-collapse: collapse; border: 0; border-spacing: 0; font-size: 9px; font-family: Arial,sans-serif;\" width=\"100%\">"+
                                                "<tr>"+
                                                    "<td style=\"font-family: Arial, sans-serif; padding: 0; width: 50%;\" align=\"left\" width=\"50%\">"+
                                                        "<p style=\"margin: 0; font-size: 14px; line-height: 16px; font-family: Arial,sans-serif; color: #ffffff;\">&reg; Binaes "+DateTime.Now.Year+"<p>"+
                                                    "</td>"+
                                                "</tr>"+
                                            "</table>"+
                                        "</td>"+
                                    "</tr>"+
                                "</table>"+
                            "</td>"+
                        "</tr>"+
                    "</table>"+
                "<body>";

            message.Body = messageBody.ToMessageBody();

            SmtpClient smtpClient = new SmtpClient();
            smtpClient.CheckCertificateRevocation = false;
            smtpClient.Connect(Server, Port, MailKit.Security.SecureSocketOptions.StartTls);
            smtpClient.Authenticate(MailUser, MailPass);
            smtpClient.Send(message);
            smtpClient.Disconnect(true);
        }
    }
}
