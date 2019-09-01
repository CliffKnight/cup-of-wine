#include <stdio.h>

int swap(int *a, int *b);

int main(void)
{
  int x = 1;
  int y = 2;
  printf("%i, %i\n", x, y);
  swap(&x, &y);
  printf("%i, %i\n", x, y);
}

int swap(int *a, int *b)
{
  int tmp = *a;
  *a = *b;
  *b = tmp;
}

