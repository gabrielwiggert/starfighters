import * as operacoesRepositories from '../repositories/operacoesRepositores';

export function novaSoma(numero: number): number {

    const buscaNumero = operacoesRepositories.buscaValorBanco()
    const soma:number = numero + buscaNumero

    return soma

} 