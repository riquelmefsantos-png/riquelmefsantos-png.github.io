// desafios.js
const CH = [
  {
    fixed: `#include <stdio.h>

int main() {
    int a = 5;
    int b = 7;
    printf("Soma: %d\\n", a + b);
    return 0;
}`,
    broken: `#include <stdio.h>

int main() {
    int a = 5;
    int b = 7;
    printf("Soma: %d\\n", a + b)
    return 0;
}`,
    m: { 6: "Faltou o ponto e vírgula (;) no fim do comando." }
  },
  {
    fixed: `#include <stdio.h>

int main() {
    float preco = 19.90;
    printf("Preco: %.2f\\n", preco);
    return 0;
}`,
    broken: `#include <stdio.h

int main() {
    float preco = 19.90;
    print("Preco: %.2f\\n", preco);
    return 0;
}`,
    m: { 1: "Faltou fechar o include com '>'.", 5: "A função correta é printf, não print." }
  },
  {
    fixed: `#include <stdio.h>

int main() {
    int i;
    for (i = 0; i < 5; i++) {
        printf("%d\\n", i);
    }
    printf("Fim\\n");
    return 0;
}`,
    broken: `#include <stdio.h>

int main() {
    int i;
    for (i = 0; i < 5; i++ {
        printf("%d\\n", i);
    }
    printf("Fim\\n")
    retrun 0;
}`,
    m: { 5: "Faltou fechar o parêntese do for.", 8: "Faltou o ponto e vírgula (;).", 9: "'return' está escrito errado (retrun)." }
  },
  {
    fixed: `#include <stdio.h>

int soma(int x, int y) {
    return x + y;
}

int main() {
    int n = 10;
    int r = soma(n, 5);
    if (r > 10) {
        printf("Maior: %d\\n", r);
    } else {
        printf("Menor\\n");
    }
    return 0;
}`,
    broken: `#include <stdio.h>

int soma(int x int y) {
    return x + y
}

int main() {
    int n = 10
    int r = soma(n, 5;
    if (r > 10) {
        printf("Maior: %d\\n, r);
    } else {
        printf("Menor\\n");
    }
    return 0;
}`,
    m: { 3: "Faltou a vírgula entre os parâmetros.", 4: "Faltou o ponto e vírgula (;) após o return.", 8: "Faltou o ponto e vírgula (;) na declaração.", 9: "Faltou fechar o parêntese da chamada de soma.", 11: "Faltou fechar as aspas da string." }
  }
];