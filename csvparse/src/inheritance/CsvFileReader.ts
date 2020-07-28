import fs from 'fs';
import { MatchResult } from '../MatchResult';

interface FileReaderOptions {
  encoding: string;
  flat?: string | undefined;
}

export abstract class CsvFileReader<T> {
  data: T[] = [];
  options: string | FileReaderOptions = {
    encoding: 'utf-8'
  };

  constructor(public filename: string, options?: string | FileReaderOptions) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync('original.csv', this.options)
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
