#include <stdio.h>
#include <string.h>

int main(void)
{
  string s = "some string";
  for (int i = 0; i < s.length; i++)
  {
    int c = (int) s[i];
    /* printf("%c %i\n", s[i], c); */
    /* 或者隐式转换 */
    printf("%c %i\n", s[i], s[i]);
  }
}
