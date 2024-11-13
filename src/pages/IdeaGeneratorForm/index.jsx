import React, { useState } from 'react';
import axios from 'axios';
import Input from '../../components/Input';
<<<<<<< Updated upstream
import NavBar from '../../components/Navbar';
import RadioButton from '../../components/RadioButton';
import CheckBox from '../../components/CheckBox';
import './IdeaGeneratorForm.css'
import Button from '../../components/Button';
=======
import NavBar from '../../components/Nav-bar';
import Button from '../../components/Button';
import Select from 'react-select';
import ErrorMessage from '../../components/Error-message';
import SelectOne from '../../components/SelectOne';

>>>>>>> Stashed changes

const IdeaGeneratorForm = () => {
    const [idea, setIdea] = useState({
        ideaName: '',
        description: '',
        technologies: [],
        designPatterns: [],
        knowledgeLevel: '',
        purpose: '',
    });

    const technologiesList = [
        "React", "Node.js", "Express", "MongoDB", "MySQL",
        "Python", "Django", "Flask", "Java", "Spring",
        "Ruby", "Rails", "PHP", "Laravel", "C#",
        "ASP.NET", "HTML/CSS", "TypeScript", "GraphQL", "Vue.js", "Angular"
    ];

    const designPatternsList = [
        "Singleton", "Observer", "Factory", "Strategy",
        "Decorator", "Facade", "Adapter", "Proxy",
        "Command", "Iterator", "Composite", "Builder", "Prototype"
    ];

    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        if (name === 'technologies' || name === 'designPatterns') {
            console.log(idea.technologies);
            setIdea(prevState => {
                const updatedValues = checked
                    ? [...prevState[name], value]
                    : prevState[name].filter(item => item !== value);
                    return {
                        ...prevState,
                        [name]: updatedValues,
                    };
            });
            
        } else {
            setIdea({
                ...idea,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token'); // Obtiene el token del localStorage
            const response = await axios.post('http://localhost:3001/api/input-parameters/', idea, {
                headers: {
                    'Authorization': `Bearer ${token}`, // Añade el token en los encabezados
                },
            });
            console.log(response.data); // Maneja la respuesta de la API según lo necesites
        } catch (error) {
            console.error('Error al enviar la idea:', error);
        }
    };

    return (
        <>
<<<<<<< Updated upstream
            <NavBar/>
            <main className='container left'>
            <h1>Generar una idea de proyecto</h1>
            <sub>Seleccione las funciones y tecnologías que desea incluir y haga clic en «Generar idea».</sub>
            <form onSubmit={handleSubmit}>
            <fieldset>
                    <legend>Detalles de la idea</legend><Input 
                    label="Temática" 
                    type="text" 
                    name="ideaName"
                    value={idea.ideaName} 
                    onChange={handleChange} 
                    required={true}>
                </Input>
                <Input 
                    label="Descripción" 
                    type="text" 
                    name="description"
                    value={idea.description} 
                    onChange={handleChange} 
                    required={true}>
                </Input>
                </fieldset>
                <fieldset>
                    <legend>Nivel de experiencia</legend>
                    <RadioButton 
                        label="Principiante" 
                        name="knowledgeLevel" 
                        value="Principiante" 
                        checked={idea.knowledgeLevel === 'Principiante'} 
                        onChange={handleChange}
                    /> 
                    <RadioButton 
                        label="Intermedio" 
                        name="knowledgeLevel" 
                        value="Intermedio" 
                        checked={idea.knowledgeLevel === 'Intermedio'} 
                        onChange={handleChange}
                    /> 
                    <RadioButton 
                        label="Avanzado" 
                        name="knowledgeLevel" 
                        value="Avanzado" 
                        checked={idea.knowledgeLevel === 'Avanzado'} 
                        onChange={handleChange}
                    /> 
                </fieldset>
                
                
                <fieldset>
                    <legend>Tecnologías (Selecciona múltiples):</legend>
                    <div className="checkbox-grid">
                        {technologiesList.map(tech => (
                            <CheckBox 
                                key={tech}
                                label={tech}
                                checked={idea.technologies.includes(tech)} 
                                onChange={handleChange} 
                                name="technologies" 
                                value={tech}
                            >
                            </CheckBox>                                

                        ))}
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Patrones de Diseño (Selecciona múltiples):</legend>
                    <div className="checkbox-grid">
                        {designPatternsList.map(pattern => (
                            <CheckBox 
                                key={pattern}
                                label={pattern}
                                checked={idea.technologies.includes(pattern)} 
                                onChange={handleChange} 
                                name="technologies" 
                                value={pattern}
                            >
                            </CheckBox>      
                            
                        ))}
                    </div>
                </fieldset>
                <Button type='submit'>Generar Idea</Button>
            </form>
=======
            <NavBar />
            <main className='container mx-auto my-14'>
                <h1 className="text-2xl font-bold mb-2 text-indigo-950 text-center">Generar una idea de proyecto</h1>
                <form onSubmit={handleSubmit} className="w-full px-52">
                    <fieldset className="fieldset">
                        <legend className="font-bold mb-4 text-indigo-950">Detalles de la idea</legend>
                        <div className="row">
                            <Input 
                                label="Temática" 
                                type="text" 
                                name="theme" 
                                value={idea.theme} 
                                onChange={(e) => handleChange('theme', e.target.value)} 
                                required 
                            />
                            {errors.theme && <p className="error-text">{errors.theme}</p>}

                            <Input 
                                label="Propósito" 
                                type="text" 
                                name="purpose" 
                                value={idea.purpose} 
                                onChange={(e) => handleChange('purpose', e.target.value)} 
                                required 
                            />
                            {errors.purpose && <p className="error-text">{errors.purpose}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
                                Descripción
                            </label>
                            <textarea 
                                id="description"
                                name="description"
                                value={idea.description}
                                onChange={(e) => handleChange('description', e.target.value)} 
                                maxLength="250"
                                rows="6"
                                placeholder="Describe tu idea en 250 caracteres o menos"
                                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                            ></textarea>
                            {errors.description && <ErrorMessage message={errors.description}/>}
                        </div>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="font-bold mb-4 text-indigo-950">Tecnologías y patrones de diseño</legend>

                        <label htmlFor="technologies">Tecnologías</label>
                        <Select
                            id="technologies"
                            name="technologies"
                            isMulti
                            options={technologiesList}
                            className="multi-select"
                            onChange={(selectedOptions) => 
                                handleChange('technologies', selectedOptions.map(option => option.value))
                            }
                        />

                        <label htmlFor="designPatterns">Patrones de diseño</label>
                        <Select
                            id="designPatterns"
                            name="designPatterns"
                            isMulti
                            options={designPatternsList}
                            className="multi-select"
                            onChange={(selectedOptions) => 
                                handleChange('designPatterns', selectedOptions.map(option => option.value))
                            }
                        />
                        <SelectOne 
                            label={'Nivel de Conocimiento'}
                            name={'knowledgeLevel'}
                            value={idea.knowledgeLevel}
                            onChange={(e) => handleChange('knowledgeLevel', e.target.value)}
                            required={true}
                            options={[
                                { value: 'beginner', label: 'Principiante' },
                                { value: 'intermediate', label: 'Intermedio' },
                                { value: 'advanced', label: 'Avanzado' },
                            ]}
                        />
                        {errors.knowledgeLevel && <ErrorMessage message={errors.knowledgeLevel}/>}
                       
                    </fieldset>

                    <Button type="submit" title="Enviar" >Enviar</Button>
                </form>
>>>>>>> Stashed changes
            </main>
            
        </>
    );
};

export default IdeaGeneratorForm;
