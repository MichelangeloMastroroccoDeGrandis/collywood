/* Simple spam protection for email addresses using jQuery.
 * Well, the protection isn’t jQuery-based, but you get the idea.
 * This snippet allows you to slightly ‘obfuscate’ email addresses to make it harder for spambots to harvest them, while still offering a readable address to your visitors.
 * E.g.
 * <a href="mailto:foo(at)example(dot)com">foo at example dot com</a>
 * →
 * <a href="mailto:foo@example.com">foo@example.com</a>
 * 
 * author: mathiasbynens
 *  from https://gist.github.com/mathiasbynens/286824
 */

$(function() {
    $('a[href^="mailto:"]').each(function() {
     this.href = this.href.replace('(at)', '@').replace(/\(dot\)/g, '.');
     // Remove this line if you don't want to set the email address as link text:
     
    });
   });