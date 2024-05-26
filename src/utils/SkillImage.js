import bootstrap from '/public/svg/bootstrap.svg';
import c from '/public/svg/c.svg';
import canva from '/public/svg/canva.svg';
import cplusplus from '/public/svg/cplusplus.svg'
import css from '/public/svg/css.svg';
import django from '/public/svg/django.svg';
import docker from '/public/svg/docker.svg';
import figma from '/public/svg/figma.svg';
import firebase from '/public/svg/firebase.svg';
import flutter from '/public/svg/flutter.svg';
import git from '/public/svg/git.svg';
import html from '/public/svg/html.svg';
import java from '/public/svg/java.svg';
import javascript from '/public/svg/javascript.svg';
import microsoftoffice from '/public/svg/microsoftoffice.svg';
import mongoDB from '/public/svg/mongoDB.svg';
import mysql from '/public/svg/mysql.svg';
import nextJS from '/public/svg/nextJS.svg';
import nginx from '/public/svg/nginx.svg';
import nodejs from '/public/svg/nodejs.svg';
import numpy from '/public/svg/numpy.svg';
import php from '/public/svg/php.svg';
import postgresql from '/public/svg/postgresql.svg';
import python from '/public/svg/python.svg';
import react from '/public/svg/react.svg';
import selenium from '/public/svg/selenium.svg';
import tailwind from '/public/svg/tailwind.svg';
import tensorflow from '/public/svg/tensorflow.svg';
import typescript from '/public/svg/typescript.svg';
import ubuntu from '/public/svg/ubuntu.svg';
import vitejs from '/public/svg/vitejs.svg';
import wordpress from '/public/svg/wordpress.svg';
import express from '/public/svg/express.svg';
import socket from '/public/svg/socket.svg';

export const SkillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'docker':
            return docker;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'react':
            return react;
        case 'typescript':
            return typescript;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        case 'vitejs':
            return vitejs;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'java':
            return java;
        case 'php':
            return php;
        case 'python':
            return python;
        case 'django':
            return django;
        case 'firebase':
            return firebase;
        case 'git':
            return git;
        case 'nginx':
            return nginx;
        case 'numpy':
            return numpy;
        case 'selenium':
            return selenium;
        case 'tensorflow':
            return tensorflow;
        case 'wordpress':
            return wordpress;
        case 'figma':
            return figma;
        case 'microsoft office':
            return microsoftoffice;
        case 'canva':
            return canva;
        case 'ubuntu':
            return ubuntu;
        case 'node js':
            return nodejs;
        case 'flutter':
            return flutter;
        case 'express js':
            return express;
        case 'socket io':
            return socket;
        default:
            break;
    }
}
