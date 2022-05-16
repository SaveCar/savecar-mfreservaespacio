import React, { useEffect, useState } from "react";
import * as Styles from "./Styles.js";

export const FiltrosBusqueda = ({onContinue}) => {
    const [valorFiltros, setValorFiltros] = useState({
        'comuna': null,
        'cobro': null,
        'vehiculo' : null,
        'suelo': null,
        'techo': null
    })

    const listaComunas = JSON.parse(localStorage.getItem('listaComunasFiltro')) || null;
    const listaTipoCobro = JSON.parse(localStorage.getItem('listaTipoCobroFiltro')) || null;
    const listaVehiculo = JSON.parse(localStorage.getItem('listaVehiculosFiltro')) || null;
    const listaSuelo = JSON.parse(localStorage.getItem('listaTipoSueloFiltro')) || null;
    

    const changeComuna = (e) => {
        const comuna = e.target.value;
        
        if (comuna === '-Comuna-'){
            setValorFiltros(prevState => ({
                ...prevState,
                comuna: null
            }))
        }else{
            setValorFiltros(prevState => ({
                ...prevState,
                comuna: comuna
            }))
        }
    }

    const changeCobro = (e) => {
        const cobro = e.target.value;

        if (cobro === '-Tipo cobro-'){
            setValorFiltros(prevState => ({
                ...prevState,
                cobro: null
            }))
        }else{
            setValorFiltros(prevState => ({
                ...prevState,
                cobro: cobro
            }))
        }
    }

    const changeVehiculo = (e) => {
        const vehiculo = e.target.value;

        if (vehiculo === '-Vehículo-'){
            setValorFiltros(prevState => ({
                ...prevState,
                vehiculo: null
            }))
        }else{
            setValorFiltros(prevState => ({
                ...prevState,
                vehiculo: vehiculo
            }))
        }
    }

    const changeSuelo = (e) => {
        const suelo = e.target.value;

        if (suelo === '-Tipo suelo-'){
            setValorFiltros(prevState => ({
                ...prevState,
                suelo: null
            }))
        }else{
            setValorFiltros(prevState => ({
                ...prevState,
                suelo: suelo
            }))
        }
    }

    const changeTecho = (e) => {
        const techo = e.target.value;
        setValorFiltros(prevState => ({
            ...prevState,
            techo: techo
        }))
    }

    const handleContinue = () => {
        localStorage.setItem('filtrosBusquedaEspacio', JSON.stringify(valorFiltros));
        onContinue()
    }

    return(
        <>
            <Styles.Wrapper>
                <Styles.Card>
                    <Styles.WrapperInline>
                        {
                            listaComunas.length > 0 &&
                                <Styles.WrapperDiv>
                                    <Styles.Label>
                                        Comuna
                                    </Styles.Label>
                                    <Styles.Select 
                                        name="comuna"
                                        onChange={(e) => changeComuna(e)}
                                    >
                                        <option value={null}> -Comuna- </option>
                                        {
                                            listaComunas.map((index, key) => {
                                                return <option key={key} value={index.idComuna}> {index.nombreComuna} </option>
                                            })
                                        }
                                    </Styles.Select>
                                </Styles.WrapperDiv>
                        }
                        {
                            listaTipoCobro.length > 0 &&
                                <Styles.WrapperDiv>
                                    <Styles.Label>
                                        Tipo cobro
                                    </Styles.Label>
                                    <Styles.Select 
                                        name="tipoCobro"
                                        onChange={(e) => changeCobro(e)}
                                    >
                                        <option value={null}> -Tipo cobro- </option>
                                        {
                                            listaTipoCobro.map((index, key) => {
                                                return <option key={key} value={index.idTipoCobro}> {index.nombreTipoCobro} </option>
                                            })
                                        }
                                    </Styles.Select>
                                </Styles.WrapperDiv>
                        }
                    </Styles.WrapperInline>

                    <Styles.WrapperInline>
                        {
                            listaVehiculo.length > 0 &&
                                <Styles.WrapperDiv>
                                    <Styles.Label>
                                        Vehiculo
                                    </Styles.Label>
                                    <Styles.Select 
                                        name="vehiculo"
                                        onChange={(e) => changeVehiculo(e)}
                                    >
                                        <option value={null}> -Vehículo- </option>
                                        {
                                            listaVehiculo.map((index, key) => {
                                                return <option key={key} value={index.idVehiculo}> {index.nombreVehiculo} </option>
                                            })
                                        }
                                    </Styles.Select>
                                </Styles.WrapperDiv>
                        }
                        {
                            listaSuelo.length > 0 &&
                                <Styles.WrapperDiv>
                                    <Styles.Label>
                                        Tipo suelo
                                    </Styles.Label>
                                    <Styles.Select 
                                        name="suelo"
                                        onChange={(e) => changeSuelo(e)}
                                    >
                                        <option value={null}> -Tipo suelo- </option>
                                        {
                                            listaSuelo.map((index, key) => {
                                                return <option key={key} value={index.idTipoSuelo}> {index.nombreTipoSuelo} </option>
                                            })
                                        }
                                    </Styles.Select>
                                </Styles.WrapperDiv>
                        }
                    </Styles.WrapperInline>
                    
                    <Styles.WrapperInline>
                        
                        <Styles.WrapperDiv>
                            <Styles.Label>
                                Techo
                            </Styles.Label>
                            <Styles.WrapperRadioButton>
                                <Styles.RadioButton
                                    type={'radio'}
                                    name={'techo'}
                                    value={true}
                                    onChange={(e) => changeTecho(e)}
                                /> 
                                <Styles.Label  style={ {'color': '#304562', 'marginTop':'2%'} } >
                                    Sí
                                </Styles.Label>
                                <Styles.RadioButton
                                    style={{'marginLeft': '10%'}}
                                    type={'radio'}
                                    name={'techo'}
                                    value={false}
                                    onChange={(e) => changeTecho(e)}
                                /> 
                                <Styles.Label  style={ {'color': '#304562',  'marginTop':'2%'} } >
                                    No 
                                </Styles.Label>
                            </Styles.WrapperRadioButton>
                        </Styles.WrapperDiv>

                    </Styles.WrapperInline>
                    
                    <Styles.Wrapper>
                        <Styles.Button
                            onClick={() => handleContinue()}
                        >
                            FILTRAR
                        </Styles.Button>
                    </Styles.Wrapper>
                </Styles.Card>
            </Styles.Wrapper>
        </>
    )
}

export default FiltrosBusqueda;