#include <stdio.h> // for printf
#include <stdlib.h> // for malloc

void f(void);

int main(void)
{
  f();
}

void f(void)
{
  int *x = malloc(10 * sizeof(int)); // normally sizeof(int) is 4 Bytes or 32 bytes
  x[10] = 50; // 越界了
  printf("It is %i.\n", x[10]);
  free(x);
}
