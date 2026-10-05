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
    m: { 6: "Faltou o ponto e vírgula (;) no fim do comando." },
    en: {"6": "Missing semicolon (;) at the end of the statement."}
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
    m: { 1: "Faltou fechar o include com '>'.", 5: "A função correta é printf, não print." },
    en: {"1": "The include is missing the closing '>'.", "5": "The correct function is printf, not print."}
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
    m: { 5: "Faltou fechar o parêntese do for.", 8: "Faltou o ponto e vírgula (;).", 9: "'return' está escrito errado (retrun)." },
    en: {"5": "The closing parenthesis of the for is missing.", "8": "Missing semicolon (;).", "9": "'return' is misspelled (retrun)."}
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
    m: { 3: "Faltou a vírgula entre os parâmetros.", 4: "Faltou o ponto e vírgula (;) após o return.", 8: "Faltou o ponto e vírgula (;) na declaração.", 9: "Faltou fechar o parêntese da chamada de soma.", 11: "Faltou fechar as aspas da string." },
    en: {"3": "Missing comma between the parameters.", "4": "Missing semicolon (;) after the return.", "8": "Missing semicolon (;) in the declaration.", "9": "Missing closing parenthesis in the soma call.", "11": "Missing closing quote of the string."}
  },
  {
    fixed: `#include <stdio.h>

int main() {
    int idade;
    printf("Digite sua idade: ");
    scanf("%d", &idade);
    printf("Idade: %d\\n", idade);
    return 0;
}`,
    broken: `#include <stdio.h>

int main() {
    int idade;
    printf("Digite sua idade: ")
    scanf("%d", idade);
    printf("Idade: %d\\n", idade);
    return 0;
}`,
    m: { 5: "Faltou o ponto e vírgula (;) no final da linha.", 6: "Faltou o operador '&' antes da variável no scanf." },
    en: {"5": "Missing semicolon (;) at the end of the line.", "6": "Missing the '&' operator before the variable in scanf."}
  },
  {
    fixed: `#include <stdio.h>

int main() {
    int cont = 0;
    while (cont < 3) {
        printf("Contador: %d\\n", cont);
        cont++;
    }
    return 0;
}`,
    broken: `#include <stdio.h>

int main() (
    int cont = 0;
    while cont < 3 {
        printf("Contador: %d\\n", cont);
        cont++;
    }
    return 0;
}`,
    m: { 3: "Abertura de bloco com parêntese '(' em vez de chave '{'.", 5: "A condição do 'while' deve estar entre parênteses." },
    en: {"3": "Block opened with parenthesis '(' instead of brace '{'.", "5": "The 'while' condition must be inside parentheses."}
  },
  {
    fixed: `#include <stdio.h>

int main() {
    int numeros[3] = {10, 20, 30};
    int soma = numeros[0] + numeros[1];
    printf("Resultado: %d\\n", soma);
    return 0;
}`,
    broken: `#include <stdio.h>

int main() {
    int numeros(3) = {10, 20, 30};
    int soma = numeros[0] + numeros[1]
    printf("Resultado: %d\\n", soma);
    return 0;
}`,
    m: { 4: "O tamanho do vetor deve ser definido com colchetes '[ ]'.", 5: "Faltou o ponto e vírgula (;) no final da instrução." },
    en: {"4": "The array size must be declared with square brackets '[ ]'.", "5": "Missing semicolon (;) at the end of the statement."}
  },
  {
    fixed: `#include <stdio.h>

int main() {
    char opcao = 'A';
    switch (opcao) {
        case 'A':
            printf("Opcao A\\n");
            break;
        default:
            printf("Outra opcao\\n");
    }
    return 0;
}`,
    broken: `#include <stdio.h>

int main() {
    char opcao = "A";
    switch (opcao) {
        case 'A'
            printf("Opcao A\\n");
            break;
        default:
            printf("Outra opcao\\n");
    }
    return 0;
}`,
    m: { 4: "Constantes de caractere (char) usam aspas simples ('A').", 6: "Faltaram os dois-pontos (:) após o valor do case." },
    en: {"4": "Character constants (char) use single quotes ('A').", "6": "Missing colon (:) after the case value."}
  },
  {
    fixed: `#include <stdio.h>

int main() {
    int valor = 42;
    int *ptr = &valor;
    *ptr = 100;
    printf("Novo valor: %d\\n", *ptr);
    return 0;
}`,
    broken: `#include <stdio.h>

int main() {
    int valor = 42;
    int *ptr = valor;
    *ptr = 100;
    printf("Novo valor: %d\\n", *ptr)
    return 0;
}`,
    m: { 5: "Ponteiro deve receber o endereço de memória (&valor).", 7: "Faltou o ponto e vírgula (;) no printf." },
    en: {"5": "A pointer must receive a memory address (&valor).", "7": "Missing semicolon (;) in the printf."}
  },
  {
    fixed: `#include <stdio.h>

struct Aluno {
    int matricula;
    float nota;
};

int main() {
    struct Aluno a1;
    a1.matricula = 123;
    a1.nota = 9.5;
    printf("Nota: %.1f\\n", a1.nota);
    return 0;
}`,
    broken: `#include <stdio.h>

struct Aluno {
    int matricula;
    float nota;
}

int main() {
    struct Aluno a1;
    a1->matricula = 123;
    a1.nota = 9.5;
    printf("Nota: %.1f\\n", a1.nota);
    return 0;
}`,
    m: { 6: "Faltou o ponto e vírgula (;) após o fechamento da struct.", 10: "Para acessar membros de uma struct direta usa-se ponto (.), não '->'." },
    en: {"6": "Missing semicolon (;) after the closing brace of the struct.", "10": "To access struct members directly use a dot (.), not '->'."}
  },
  {
    fixed: `#include <stdio.h>

int dobro(int n) {
    return n * 2;
}

int main() {
    int num = 7;
    int res = dobro(num);
    printf("Dobro: %d\\n", res);
    return 0;
}`,
    broken: `#include <stdio.h>

dobro(int n) {
    return n * 2;
}

int main() {
    int num = 7;
    int res = dobro(num)
    printf("Dobro: %d\\n", res);
    return 0;
}`,
    m: { 3: "Faltou declarar o tipo de retorno da função (int).", 9: "Faltou o ponto e vírgula (;) na chamada da função." },
    en: {"3": "The function's return type (int) is missing.", "9": "Missing semicolon (;) in the function call."}
  },
  {
    fixed: `#include <stdio.h>

int main() {
    int a = 10;
    int b = 20;
    if (a > 5 && b == 20) {
        printf("Condicao satisfeita\\n");
    }
    return 0;
}`,
    broken: `#include <stdio.h>

int main() {
    int a = 10;
    int b = 20;
    if (a > 5 and b = 20) {
        printf("Condicao satisfeita\\n");
    }
    return 0;
}`,
    m: { 6: "Em C o operador lógico E é '&&' (não 'and') e comparação é '==' (não '=')." },
    en: {"6": "In C the logical AND is '&&' (not 'and') and comparison is '==' (not '=')."}
  },
  {
    fixed: `#include <stdio.h>
#include <string.h>

int main() {
    char nome[20] = "Maria";
    int tam = strlen(nome);
    printf("Tamanho: %d\\n", tam);
    return 0;
}`,
    broken: `#include <stdio.h>
#include string.h

int main() {
    char nome[20] = 'Maria';
    int tam = strlen(nome);
    printf("Tamanho: %d\\n", tam);
    return 0;
}`,
    m: { 2: "O arquivo de cabeçalho deve estar entre '<' e '>' (<string.h>).", 5: "Strings em C devem ser declaradas com aspas duplas (\"Maria\")." },
    en: {"2": "The header file must be between '<' and '>' (<string.h>).", "5": "Strings in C must use double quotes (\"Maria\")."}
  },
  {
    fixed: `#include <stdio.h>

int main() {
    int x = 1;
    do {
        printf("%d\\n", x);
        x++;
    } while (x <= 3);
    return 0;
}`,
    broken: `#include <stdio.h>

int main() {
    int x = 1;
    do {
        printf("%d\\n", x)
        x++;
    } while (x <= 3)
    return 0;
}`,
    m: { 6: "Faltou o ponto e vírgula (;) no printf.", 8: "O comando 'do-while' exige ponto e vírgula (;) após a condição." },
    en: {"6": "Missing semicolon (;) in the printf.", "8": "The 'do-while' requires a semicolon (;) after the condition."}
}
];
